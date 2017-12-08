import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NotesRoutes } from './notes.routes';
import { NotesComponent } from './components/notes.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NotesRoutes
    ],

    declarations: [
        NotesComponent
    ]
})

export class NotesModule { }
