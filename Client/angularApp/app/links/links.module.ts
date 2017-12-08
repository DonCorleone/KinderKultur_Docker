import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LinksRoutes } from './links.routes';
import { LinksComponent } from './components/links.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        LinksRoutes
    ],

    declarations: [
        LinksComponent
    ]
})

export class LinksModule { }
