import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarEditComponent } from './car-edit/car-edit.component';

const routes: Routes = [
  {
    path: '', component: CarComponent,
    children: [
      { path: '', redirectTo: 'car-list', pathMatch: 'full' },
      { path: 'car-list', component: CarListComponent },
      { path: 'car-add', component: CarAddComponent },
      { path: 'car-edit/:id', component: CarEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
