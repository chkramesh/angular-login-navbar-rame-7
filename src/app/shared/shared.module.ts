import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredLabelDirective } from './directives/required-label.directive';
import { LogoComponent } from './logo/logo.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule
    ],
    declarations: [RequiredLabelDirective, LogoComponent],
    exports: [ RequiredLabelDirective, LogoComponent ]
})
export class SharedModule { }
