import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  currentUserDetails: any;
  locUser: any;
  userRole: any;

  ngOnInit() {
    this.locUser = JSON.parse(localStorage.getItem('currentUser') || '');
    this.currentUserDetails = this.locUser;
    this.userRole = localStorage.getItem('role') || '';

  }
}
