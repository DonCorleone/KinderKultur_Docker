import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MyFocus } from '../directives/focus.directive';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],

	declarations: [
		NavigationComponent,
		CustomFooterComponent,
		MyFocus,
		SpinnerComponent
	],

	exports: [
		NavigationComponent,
		CustomFooterComponent,
		MyFocus,
		SpinnerComponent
	],

	providers: []
})

export class SharedModule { }
