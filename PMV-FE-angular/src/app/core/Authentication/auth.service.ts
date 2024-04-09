import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private authSecretKey = 'token';

  logged = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private service: ApiService, private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  async login(formvalue: any) {
    return await this.fetchLogin(formvalue);
  }

  fetchLogin(formvalue: any): Promise<any> {
    return new Promise((resolve) => {
      this.service.post('user/login', formvalue).subscribe(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        localStorage.setItem('role', data.roles[0]);
        const authToken = data.token
        localStorage.setItem(this.authSecretKey, authToken);
        this.isAuthenticated = true;
        this.logged.next(true);
        resolve(true);
      }, (err: any) => {
        this.logged.next(false);
        resolve(false);
      });
    });
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    localStorage.clear();
    this.isAuthenticated = false;
    this.logged.next(false);
    this.router.navigate(['/login']);
  }

}
