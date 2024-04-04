import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { LoginFormModel } from '../../models/forms/login-form.model';
import { AuthUser } from '../../models/auth-user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FlexLayoutModule, MatButtonModule, MatFormField, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<LoginFormModel>;
  constructor(private readonly fb: NonNullableFormBuilder,
    private readonly authSvc: AuthenticationService,
    private readonly router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }


  onLoginSubmit() {
    if (this.loginForm.valid) {
      const val = this.loginForm.value;
      const user: AuthUser = {
        username: val.username!,
        email: val.username!,
        firstName: val.username!,
        lastName: val.username!
      }
      console.log(user);
      this.authSvc.setAuthUserData(user);
      this.router.navigate(['/categories']);
    }
  }
}
