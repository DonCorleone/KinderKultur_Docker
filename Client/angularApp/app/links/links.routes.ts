import { RouterModule, Routes } from '@angular/router';

import { LinksComponent } from './components/links.component';

const routes: Routes = [
    { path: '', component: LinksComponent }
];

export const LinksRoutes = RouterModule.forChild(routes);
