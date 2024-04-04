import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { WorkAreaComponent } from './shared/work-area/work-area.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthUser } from './models/auth-user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, WorkAreaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'catalog-app';
  authUser$!: Observable<AuthUser>;

  constructor(private readonly authSvc: AuthenticationService,
    private readonly router: Router) {
  }
  ngOnInit(): void {
    this.authSvc.setAuthUserDataFromStorage();
    this.authUser$ = this.authSvc.user$;
  }

  logoutUser() {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }
}
