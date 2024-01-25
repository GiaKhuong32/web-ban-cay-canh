import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {CardComponent} from "./page/card/card.component";
import {AddproductComponent} from "./page/addproduct/addproduct.component";
import {AdminProductStockingComponent} from "./page/admin-product-stocking/admin-product-stocking.component";

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'card', component:CardComponent },
  { path: 'addproduct', component:AddproductComponent },
  { path: 'admin-product-stocking', component:AdminProductStockingComponent },
];
