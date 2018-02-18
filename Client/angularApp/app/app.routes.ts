import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{
		path: 'links', loadChildren: './links/links.module#LinksModule',
	}
];

export const AppRoutes = RouterModule.forRoot(routes);
