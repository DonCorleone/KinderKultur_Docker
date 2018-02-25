### <a name="3.2"></a>Development
For the Angular app, we use _JiT compilation_.
```
npm run build-dev
```
#### Watch for development
```
npm run watch-webpack-dev
```
#### Hot Module Replacement
```
npm start
```

### <a name="3.3"></a>Production
For the Angular app, we use _AoT compilation_, tree shaking & minification.
```
npm run webpack-production
```

## <a name="4"></a>Testing
The _xUnit_ test for ASP.NET Core API is in _tests/AngularWebpackVisualStudio_Tests_ folder:
```
dotnet test
```
or from Visual Studio: _Test -> Run -> All Tests_

See this link for more details on _xUnit_ testing in ASP.NET Core: https://docs.microsoft.com/it-it/dotnet/articles/core/testing/unit-testing-with-dotnet-test

The Angular test is in _angularApp/tests_ folder. It uses _Karma_ test runner and _Jasmine_ test framework:
```
npm test
```
See this link for more details on Angular testing: https://angular.io/guide/testing

## <a name="5"></a>Dotnet Template
To install a template for this package we prepared a `template.json` to do that.

Just run `dotnet new --install <PATH>` where <PATH> is the path to the folder where the `.template.config` folder lives.

After that you should see the template when running `dotnet new` on commandline

![dotnetnew](.github/dotnet-new.jpg "dotnetnew")

Now you can use the temaplte with `dotnet new angularwebapi`


## <a name="6"></a>Notes
The Webpack configuration could also build all of the scss and css files to a separate _app.css_ or _app."hash".css_ which could be loaded as a single file in the distribution. Some of the vendor js and css could also be loaded directly in the html header using the _index.html_ file and not included in the Webpack build.

## <a name="7"></a>Links
- [Lazy Loading](https://github.com/damienbod/Angular2WebpackVisualStudio/tree/master/docs/LAZY_LOADING.md)
- [Hot Module Replacement](https://github.com/damienbod/Angular2WebpackVisualStudio/tree/master/docs/HMR.md)

- [Building production ready Angular apps with Visual Studio and ASP.NET Core](https://damienbod.com/2017/01/01/building-production-ready-angular-apps-with-visual-studio-and-asp-net-core/)

## License

MIT

## DonCorleone Modifications

### Init

    npm install rimraf -g
    rimraf node_modules
    npm install

### GIT

    git remote rm origin;
    git remote add origin https://github.com/DonCorleone/AngularWebpack.git
    git push -u origin master

### Bootstrap 4 Beta

    npm install --save popper.js angular-popper
    npm uninstall bootstrap@3.3.7
    npm install bootstrap@4.0.0-beta --save

#### vendor.ts

```javascript
// import 'bootstrap/dist/css/bootstrap-theme.css';
```

#### webpack.dev.js

```javascript
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
```

#### webpack.prod.js

```javascript
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
```

#### AOT

    node_modules/.bin/ngc -p tsconfig-aot.json;

### MongoDB

#### Start

    cd /usr/local/bin
    mongod --config mongod.cfg
    
    /Users/dev/Documents/imports/links.json
mongoimport --db kinderkultur --collection links --drop --file ~/Documents/imports/links.json
mongoimport -h 127.0.0.1:1111 --db kinderkultur --collection links --drop --file ~/Documents/imports/links.json
-h <hostname><:port>


#### credits

use admin
db.createUser(
  {
    user: "admin",
    pwd: "xxx",
    roles: [ { role: "root", db: "admin" } ]
  }
);
exit;

mongo admin -u admin -p