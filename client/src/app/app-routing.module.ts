import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './cars/create/create.component';
import { CatalogComponent } from './cars/catalog/catalog.component';
import { DetailsComponent } from './cars/details/details.component';
import { EditComponent } from './cars/edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthActivate } from './core/guards/auth.activate';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthActivate] },
  { path: 'catalog', component: CatalogComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
