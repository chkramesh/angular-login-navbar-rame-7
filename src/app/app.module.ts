import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
