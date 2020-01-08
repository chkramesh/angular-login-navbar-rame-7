import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


// import { AuthGuardService } from './services/auth-guard.service';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
        // {path: '', redirectTo: 'form',  pathMatch: 'full'},
        // RC::
        { path: '', component: HomeComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent },

        { path: 'pos', redirectTo: 'pos',  pathMatch: 'full' },
        { path: 'pos', loadChildren: '../pos/pos.module#PosModule' },

        { path: 'user', redirectTo: 'user',  pathMatch: 'full' },
        { path: 'user', loadChildren: '../user/user.module#UserModule' },

        //{ path: 'dashboard', redirectTo: 'dashboard',  pathMatch: 'full' },
        { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },

        { path: 'inventory', loadChildren: '../inventory/inventory.module#InventoryModule' },
        { path: 'manager', loadChildren: '../manager/manager.module#ManagerModule' },

        { path: 'logout', component: LogoutComponent },
    
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'admin',
    //     canActivate: [AuthGuardService],
    //     loadChildren: '../admin/admin.module#AdminModule'
    // },

    // {
    //     path: 'form',
    //     loadChildren: '../form/form.module#FormModule'
    // },

    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
