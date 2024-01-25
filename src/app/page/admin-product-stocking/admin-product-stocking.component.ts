import { Component } from '@angular/core';
import {TuiButtonModule, TuiHintModule} from "@taiga-ui/core";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-admin-product-stocking',
  standalone: true,
    imports: [
        TuiButtonModule,
        TuiHintModule
    ],
  templateUrl: './admin-product-stocking.component.html',
  styleUrl: './admin-product-stocking.component.scss'
})
export class AdminProductStockingComponent {
  constructor(public firebaseService:FirebaseService) {
  }
}
