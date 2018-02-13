import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{
		path: 'links', loadChildren: './links/links.module#LinksModule',
	},
	{
		path: 'notes', loadChildren: './notes/notes.module#NotesModule',
	}
];

export const AppRoutes = RouterModule.forRoot(routes);
