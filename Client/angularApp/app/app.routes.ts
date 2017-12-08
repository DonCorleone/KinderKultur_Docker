import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'links', loadChildren: './links/links.module#LinksModule',
    },
    {
        path: 'notes', loadChildren: './notes/notes.module#NotesModule',
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
