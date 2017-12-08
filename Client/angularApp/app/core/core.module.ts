import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { Configuration } from '../app.constants';
import { ThingService } from './services/thing-data.service';
import { LinkService } from './services/link-data.service';
import { NoteService } from './services/note-data.service';

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
                ThingService,
                LinkService,
                NoteService,
                Configuration
            ]
        };
    }
}
