import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { LinksRoutes } from './links.routes';
import { LinksComponent } from './components/links.component';
import { LinksEditableComponent } from './components/linksEditable.component';
import { LinksEditableDetailComponent } from './components/linksEditable-detail.component';
import { LinksEditableAddComponent } from './components/linksEditable-add.component';
// import { routing } from '../account/account.routing';
import { AuthGuard } from '../auth.guard';
import { LinkService } from '../core/services/link-data.service';
import { LinksRoutes } from './links.routes';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		LinksRoutes
	],

	declarations: [
		LinksComponent,
		LinksEditableComponent,
		LinksEditableDetailComponent,
		LinksEditableAddComponent
	],
	exports:      [ ],
	providers: [AuthGuard, LinkService]
})

export class LinksModule { }
