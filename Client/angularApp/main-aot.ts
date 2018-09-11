import './styles.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../angularApp/app/app.module.ngfactory';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

// Entry point for AoT compilation.
declare let System: any;

// Styles.
enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
