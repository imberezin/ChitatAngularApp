import { Component } from '@angular/core';
// import { MaterialModuleModule } from '../../module/material-module/material-module.module';
import { Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [MatButtonModule,MatCardModule,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {

  
  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]), // Add validation
    password: new FormControl('', [Validators.required]) // Add validation
  });

  /*
    formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Add validation
    password: new FormControl('', [Validators.required]) // Add validation
  });
AuthService: undefined

  */

  constructor(private authService: AuthService){
    console.log('AuthService:', this.authService); // Check if this prints the AuthService object

  }
  get username() {
    return this.formLogin.get('username');
  }
  get password() {
    return this.formLogin.get('password');
  }

  isLoading = false; // Add a loading state

  submit() {
    if (this.formLogin.valid) {
      this.isLoading = true; // Set loading state to true
      const { username, password } = this.formLogin.value; // Get values from the form

      // Call the login method from AuthService
      this.authService.login(username, password).add(() => {
        this.isLoading = false; // Reset loading state when the request completes
      });
    }

  }

  @Input() error: string | null | undefined;

  // @Output() submitEM = new EventEmitter();

}
