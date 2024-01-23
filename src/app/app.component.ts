import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./Component/navbar/navbar.component";
import {CayCanh, ContentComponent} from "./Component/content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webbanhang';
  itemcard: CayCanh[]=[
    {
      id:'1',
      img:'src/assets/img/Cây Lưỡi Hổ.jpg',
      name:'Cây lưỡi hổ',
      quality:30,
      price:'500.000',
      status: 'còn hàng',
      description:'Cây này đẹp lắm',
    }
  ]
  addItem(newItem: CayCanh) {
    this.itemcard.push(newItem);
  }
  itemlistcard: CayCanh[]=[]
  addtocard(newItem: CayCanh) {

    this.itemlistcard.push(newItem);
}}
