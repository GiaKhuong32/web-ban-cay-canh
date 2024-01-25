import { Injectable } from '@angular/core';
import {CayCanh} from "../model/tree";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  itemcard: CayCanh[]=[
    {
      id:'1',
      img:'./assets/img/Cây%20Lưỡi%20Hổ.jpg',
      name:'Cây lưỡi hổ',
      quantity:1,
      price:'500.000',
      status: 'còn hàng',
      description:'Cây này đẹp lắm',
    }
  ]


  itemlistcard: CayCanh[]=[]
  addtocard(newItem: CayCanh) {

    this.itemlistcard.push(newItem);
  }
}
