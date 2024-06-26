import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateGuard } from '../guards/create.activate';
import { CarResolver } from './car-detail.resolver';
import { CreatorGuard } from '../guards/creator.activate';
import { AuthActivate } from '../guards/auth.activate';
import { CanEditActivate } from '../guards/edit.activate';

const routes: Routes = [
  { path: 'create', component: CreateComponent, canActivate: [CreateGuard] },
  { path: 'catalog', component: CatalogComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    resolve: { car: CarResolver },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [CanEditActivate,CreatorGuard],
    resolve: { car: CarResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
