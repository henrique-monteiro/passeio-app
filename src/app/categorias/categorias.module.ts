import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categorias-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
