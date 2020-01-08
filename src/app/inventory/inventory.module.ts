import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryComponent } from './inventory.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryHomeComponent,
    StockEntryComponent,
    ProductsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    AppMaterialModule
  ]
})
export class InventoryModule { }
