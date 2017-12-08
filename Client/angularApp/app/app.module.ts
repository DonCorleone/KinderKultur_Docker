import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,    // Include it under 'imports' in your application module
        // after BrowserModule.
        HttpClientModule,
        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }
