import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { Configuration } from '../app.constants';
import { LinkService } from './services/link-data.service';

@NgModule({
	imports: [
		CommonModule
	]
})

export class CoreModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				LinkService,
				Configuration
			]
		};
	}
}
