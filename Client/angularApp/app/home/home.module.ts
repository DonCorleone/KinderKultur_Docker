import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home.component';
import { HomeRoutes } from './home.routes';
import { HttpModule } from '@angular/http';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		HttpModule,
		HomeRoutes
	],

	declarations: [
		HomeComponent
	],

	exports: [
		HomeComponent
	]
})

export class HomeModule { }
