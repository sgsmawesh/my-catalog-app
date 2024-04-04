import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from '../../models/auth-user.model';
import { NgIf } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userName: string = '';

  constructor(private readonly authSvc: AuthenticationService) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((user: AuthUser) => {
      this.userName = user.firstName;
    });
  }
}
