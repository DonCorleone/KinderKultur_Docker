import { RouterModule, Routes } from '@angular/router';

import { LinksComponent } from './components/links.component';
import { LinksEditableComponent } from './components/linksEditable.component';
import { LinksEditableDetailComponent } from './components/linksEditable-detail.component';
import { LinksEditableAddComponent } from './components/linksEditable-add.component';

const routes: Routes = [
	{ path: '', component: LinksComponent },
	{ path: 'editable', component: LinksEditableComponent },
	{ path: 'detail/:id', component: LinksEditableDetailComponent },
	{ path: 'add', component: LinksEditableAddComponent }
];

export const LinksRoutes = RouterModule.forChild(routes);
