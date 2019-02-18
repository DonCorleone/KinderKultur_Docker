import './styles.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import Bootstrap
import 'bootstrap';

import { AppModule } from './app/app.module';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

// Entry point for JiT compilation.
declare let System: any;

// Styles.
// Enables Hot Module Replacement.
declare let module: any;
if (module.hot) {
	module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
