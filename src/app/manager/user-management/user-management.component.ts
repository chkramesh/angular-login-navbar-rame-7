import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  template: `
    <div class="horizontal-padding">
      <router-outlet name="master"></router-outlet>
      <div style="min-height: 10px"></div>
      <router-outlet name="detail"></router-outlet>
    </div>
  `,
  // templateUrl: './user-management.component.html',
  // styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
