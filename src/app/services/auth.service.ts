import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    console.log("AuthService constructor")
  }

  public login(email: string, password: string) {
    console.log("====login===== ")

    console.log("email "  + email)
    return this.http.post<{ success: boolean; token: string }>(`${this.apiUrl}/api/login`, {email, password })
      .pipe(
        catchError(error => {
          console.error('Login failed:', error);
          alert('Login failed. Please check your credentials and try again.'); // Notify the user
          return of(null); // Return an observable to prevent the app from crashing
        })
      )
      .subscribe(response => {
        if (response?.success) {
          localStorage.setItem(this.tokenKey, response.token);
          console.log('Login success!');
          this.router.navigate(['/']);
        }
      });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}