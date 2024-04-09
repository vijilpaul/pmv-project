import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { ShareModule } from 'src/app/shared/share.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarComponent,
    CarListComponent,
    CarAddComponent,
    CarEditComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ShareModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
