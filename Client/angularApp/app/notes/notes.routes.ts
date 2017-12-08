import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './components/notes.component';

const routes: Routes = [
    { path: '', component: NotesComponent }
];

export const NotesRoutes = RouterModule.forChild(routes);
