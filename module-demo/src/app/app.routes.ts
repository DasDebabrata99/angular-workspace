import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path: 'elements',
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)  // Lazy loading ElementsModule
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then(c => c.CollectionsModule)  // Lazy loading ElementsModule
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then(c => c.ViewsModule)  // Lazy loading ViewsModule
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule)  // Lazy loading ModsModule
  },
  {
    path:'**', component:NotFoundComponent
  }];


