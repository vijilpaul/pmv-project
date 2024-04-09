import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    ShareModule
  ]
})
export class MyProfileModule { }
