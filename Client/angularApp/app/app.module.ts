import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

/* Account Imports */
import { AccountModule } from './account/account.module';

import { ConfigService } from './shared/utils/config.service';

@NgModule({
	imports: [
		AccountModule,
		BrowserModule,
		FormsModule, // Include it under 'imports' in your application module
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
	providers: [ConfigService],
	bootstrap: [AppComponent]
})

export class AppModule { }
