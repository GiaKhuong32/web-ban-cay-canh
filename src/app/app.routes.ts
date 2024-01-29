import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {CardComponent} from "./page/card/card.component";
import {AddproductComponent} from "./page/addproduct/addproduct.component";
import {AdminProductStockingComponent} from "./page/admin-product-stocking/admin-product-stocking.component";
import {LoginComponent} from "./page/login/login.component";

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./page/home/home.routes').then(m => m.HomeRoutes) },
  { path: 'login',
    loadChildren: () => import('./page/login/login.routes').then(m => m.LoginRoutes)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
