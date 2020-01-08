import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-logout',
  template: `
    <p>Logging out...</p>
  `,
  // styles: [],
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-logout',
//   templateUrl: './logout.component.html',
//   styleUrls: ['./logout.component.scss']
// })
// export class LogoutComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
