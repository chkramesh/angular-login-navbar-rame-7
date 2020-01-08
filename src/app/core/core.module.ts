import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

// import { AuthenticationService } from './services/authentication.service';
// import { AuthGuardService } from './services/auth-guard.service';

import { AppMaterialModule } from '../app-material/app-material.module';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { UiService } from '../common/ui.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor } from './services/auth/auth-http-interceptor';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forRoot([]),
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreRoutingModule,
        AppMaterialModule,
        SharedModule,

    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        PageNotFoundComponent,
        LogoutComponent,
       
    ],
    exports: [
        RouterModule,
        HeaderComponent
    ],
    providers: [
        // AuthenticationService,
        // AuthGuardService
        AuthService,
        AuthGuard,
        UiService,
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true
        },
    ]
})
export class CoreModule { }
