import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ManagerComponent } from './manager.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserModule } from '../user/user.module';

import { AuthGuard } from '../core/services/auth/auth.guard';
import { UserService } from '../user/userservice/user.service';
import { UserResolve } from '../user/userservice/user.resolve';

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerHomeComponent,
    ReceiptLookupComponent,
    UserManagementComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    AppMaterialModule,
    UserModule
  ],
  providers: [AuthGuard, UserService, UserResolve],
})
export class ManagerModule { }
