import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [CatalogComponent, CreateComponent, DetailsComponent, EditComponent],
})
export class CarsModule {}
