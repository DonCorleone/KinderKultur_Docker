import { RouterModule, Routes } from '@angular/router';

import { LinksComponent } from './components/links.component';
import { LinksEditableComponent } from './components/linksEditable.component';
import { LinksEditableDetailComponent } from './components/linksEditable-detail.component';
import { LinksEditableAddComponent } from './components/linksEditable-add.component';
import { AuthGuard } from '../auth.guard';
import { ModuleWithProviders } from '@angular/core';

// const routes: Routes = ;

export const LinksRoutes: ModuleWithProviders<RouterModule> = RouterModule.forChild([
	{ path: '', component: LinksComponent },
	{ path: 'editable', component: LinksEditableComponent, canActivate: [AuthGuard] },
	{ path: 'detail/:id', component: LinksEditableDetailComponent, canActivate: [AuthGuard] },
	{ path: 'add', component: LinksEditableAddComponent, canActivate: [AuthGuard] }
]);
