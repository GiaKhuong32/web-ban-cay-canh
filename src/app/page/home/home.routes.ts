import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {CardComponent} from "../card/card.component";
import {AddproductComponent} from "../addproduct/addproduct.component";
import {AdminProductStockingComponent} from "../admin-product-stocking/admin-product-stocking.component";
import {ContentComponent} from "../../Component/content/content.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";

export const HomeRoutes: Routes = [
  { path: '', component:HomeComponent,
    children: [
      { path: 'product', component:ContentComponent},
      { path: 'card', component:CardComponent },
      { path: 'product-detail/:id', component:ProductDetailComponent},
      { path: 'addproduct', component:AddproductComponent },
      { path: 'admin-product-stocking', component:AdminProductStockingComponent },
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full'
      }
    ]
  },
];
