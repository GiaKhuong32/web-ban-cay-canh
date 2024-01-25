import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Output, EventEmitter } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CayCanh} from "../../model/tree";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public route:Router) {
  }
  naviage(){
    this.route.navigate(['card'])
  }
  naviageAddProduct(){
    this.route.navigate(['addproduct'])
  }
  naviageStockingProduct(){
    this.route.navigate(['admin-product-stocking'])
  }

  @Input() itemcard: CayCanh[] = [];
}

