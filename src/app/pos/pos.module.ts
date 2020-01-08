import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos/pos.component';
import { PosLineComponent } from './pos-line/pos-line.component';

@NgModule({
  declarations: [PosComponent, PosLineComponent],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
