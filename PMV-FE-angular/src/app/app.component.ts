import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/Authentication/auth.service';
import { ApiService } from './core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  badgeCount: number = 0;
  currentUser: any;

  constructor(private router: Router, private auth: AuthService, private service: ApiService) {
    this.service.get('user/isuser').subscribe(data => {
      if (!data) {
        this.service.post('user/register').subscribe();
      }
    });
  }
  ngOnInit() {
    this.auth.logged.subscribe(data => {
      this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') || '') : '';
      this.fetchNotifyCount();
    });
  }
  ngDoCheck(){
    this.badgeCount = Number(localStorage.getItem('notify-count'));
  }
  
  fetchNotifyCount() {
    this.service.get('vehicle/notification-count').subscribe(data => {
      this.badgeCount = data;
      localStorage.setItem('notify-count', data)
    })
  }

  onNotification() {
    this.router.navigate(['/notification']);
  }
  onProfile() {
    this.router.navigate(['/my-profile']);
  }

  onLogout() {
    this.auth.logout();
  }
}
