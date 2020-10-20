import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LinkService } from './services/link-data.service';
import { ConfigService } from '../shared/utils/config.service';

@NgModule({
	imports: [
		CommonModule
	]
})

export class CoreModule {
	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [
				LinkService,
				ConfigService
			]
		};
	}
}
