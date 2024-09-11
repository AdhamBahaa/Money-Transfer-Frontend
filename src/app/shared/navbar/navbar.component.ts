import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IUserInfo } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  iconChange: boolean = false;
  loggedIn: boolean = false;
  userInfo: IUserInfo | undefined;
  private subscription: Subscription | undefined;

  constructor(public router: Router, private _userService: UserService) {}
  toggleIconVisibility() {
    this.iconChange = !this.iconChange;
  }

  ngOnInit() {
    this.subscription = this._userService.userInfo().subscribe({
      next: (res: IUserInfo) => {
        console.log('INFOOO: ', res);
        this.userInfo = res;
      },
      error: (error) => {
        console.error('Complete error:', error);
      },
    });
  }

  ngOnDestroy() {
    // Clean up the subscription to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logout(): void {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    this.router.navigate(['login']);
  }
}
