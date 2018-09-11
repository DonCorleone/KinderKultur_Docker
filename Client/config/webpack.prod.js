const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ngToolsWebpack = require('@ngtools/webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const OfflinePlugin = require('offline-plugin');

const helpers = require('./webpack.helpers');

const ROOT = path.resolve(__dirname, '..');

console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');
process.traceDeprecation = true;

module.exports = {
	mode: 'production',
	entry: {
		vendor: './angularApp/vendor.ts',
		polyfills: './angularApp/polyfills.ts',
		app: './angularApp/main-aot.ts' // AoT compilation
	},

	output: {
		path: ROOT + '/wwwroot/',
		filename: 'dist/[name].[hash].bundle.js',
		chunkFilename: 'dist/[id].[hash].chunk.js',
		publicPath: '/'
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},

	devServer: {
		historyApiFallback: true,
		stats: 'minimal',
		outputPath: path.join(ROOT, 'wwwroot/')
	},

	optimization: {
		runtimeChunk: 'single', // enable "runtime" chunk
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},

	module: {
		rules: [
			{
				test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
				use: '@ngtools/webpack'
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
				use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
			},
			{
				test: /favicon.ico$/,
				use: 'file-loader?name=/[name].[ext]'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				include: path.join(ROOT, 'angularApp/styles'),
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.scss$/,
				exclude: path.join(ROOT, 'angularApp/styles'),
				use: ['raw-loader', 'sass-loader']
			},
			{
				test: /\.html$/,
				use: 'raw-loader'
			}
		],
		exprContextCritical: false
	},

	plugins: [
		// AoT plugin.
		new ngToolsWebpack.AngularCompilerPlugin({
			tsConfigPath: './tsconfig-aot.json',
			entryModule: 'path/to/app.module#AppModule',
			sourceMap: true
		}),
		new CleanWebpackPlugin(['./wwwroot/dist', './wwwroot/assets'], {
			root: ROOT
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new OfflinePlugin({
			caches: 'all',
			AppCache: false,
			ServiceWorker: {
			  minify: false, 
			},
		 }),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: 'angularApp/index.html'
		}),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),

		new CopyWebpackPlugin([
			{ from: './angularApp/images/**/*', to: 'assets/', flatten: true }
		]),

		new FilterWarningsPlugin({ 
			exclude: /System.import/ 
		 })
	]
};
