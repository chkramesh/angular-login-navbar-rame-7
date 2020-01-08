import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { AuthGuard } from '../core/services/auth/auth.guard';
import { Role } from '../core/model/role.enum';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { ManagerComponent } from './manager.component';
import { UserTableComponent } from './user-table/user-table.component';
import { ViewUserComponent } from '../user/view-user/view-user.component';
import { UserResolve } from '../user/userservice/user.resolve';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
      {
        path: 'home',
        component: ManagerHomeComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'users',
        component: UserManagementComponent,
        children: [
          { path: '', component: UserTableComponent, outlet: 'master' },
          {
            path: 'user',
            component: ViewUserComponent,
            outlet: 'detail',
            resolve: {
              user: UserResolve,
            },
          },
        ],
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },

        // children: [
        //   { path: '', component: UserTableComponent, outlet: 'master' },
        //   {
        //     path: 'user',
        //     component: ViewUserComponent,
        //     outlet: 'detail',
        //     resolve: {
        //       user: UserResolve,
        //     },
        //   },
        // ],
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        // data: {
        //   expectedRole: Role.Manager,
        // },
      },
      { path: 'receipts', component: ReceiptLookupComponent },
    ],
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
