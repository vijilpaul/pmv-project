import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { CommonTableComponent } from './common-table/common-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    CommonTableComponent
  ]
})
export class ShareModule { }
