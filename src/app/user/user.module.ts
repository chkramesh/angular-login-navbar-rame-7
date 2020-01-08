import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({  
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [ProfileComponent, ViewUserComponent],
  exports: [ ProfileComponent ]  
})
export class UserModule { }

