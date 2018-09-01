import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home.component';
import { HomeRoutes } from './home.routes';
import { ImageService } from '../core/services/image.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		HomeRoutes
	],

	declarations: [
		HomeComponent
	],

	exports: [
		HomeComponent
	],
	providers: [
		ImageService
	]
})

export class HomeModule { }
