import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthUser } from '../../models/auth-user.model';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FlexLayoutModule, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input('authUser') authUser$!: Observable<AuthUser>;
  @Output('onLogout') onLogout = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    this.authUser$.subscribe((user: AuthUser) => {
      this.userName = user.firstName;
    });
  }
  userName: string = '';

  logout() {
    this.onLogout.emit();
  }
}
