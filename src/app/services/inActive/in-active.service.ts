import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Assuming you have an AuthService for handling logout
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private timeoutDuration = 2 * 60 * 1000; // 2 minutes in milliseconds
  private timeoutId: any;

  constructor(private router: Router, private _authService: AuthService) {
    this.startInactivityTimer();
    this.setupUserActivityListeners();
  }

  // Start the inactivity timer
  private startInactivityTimer() {
    this.clearInactivityTimer(); // Clear any existing timer
    this.timeoutId = setTimeout(() => {
      this.logout();
    }, this.timeoutDuration);
  }

  // Clear the inactivity timer
  private clearInactivityTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  // Reset the timer on user activity
  private resetInactivityTimer() {
    this.startInactivityTimer();
  }

  // Setup listeners for user activity
  private setupUserActivityListeners() {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart']; // User activity events

    events.forEach((event) => {
      window.addEventListener(event, () => this.resetInactivityTimer());
    });
  }

  // Logout function
  private logout() {
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');

    // Ensure tokens are present before calling logout
    if (accessToken && refreshToken) {
      this._authService.logout({ accessToken, refreshToken }).subscribe(
        (response) => {
          console.log('Logout successful:', response);

          // Clear the session storage
          sessionStorage.clear();

          // Navigate to the welcome-back page
          this.router.navigate(['/welcome-back']);
        },
        (error) => {
          console.error('Logout failed:', error);

          // You may still want to clear session storage and navigate
          sessionStorage.clear();
          this.router.navigate(['/welcome-back']);
        }
      );
    } else {
      // If no tokens, just clear session and navigate
      sessionStorage.clear();
      this.router.navigate(['/welcome-back']);
    }
  }
}
