import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/Authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'car', canActivate: [AuthGuard], loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule) },
  { path: 'notification', canActivate: [AuthGuard], loadChildren: () => import('./modules/notification/notification.module').then(m => m.NotificationModule) },
  { path: 'my-profile', canActivate: [AuthGuard], loadChildren: () => import('./modules/my-profile/my-profile.module').then(m => m.MyProfileModule) },
  { path: 'service-history', loadChildren: () => import('./modules/service-history/service-history.module').then(m => m.ServiceHistoryModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
