import { Injectable } from '@angular/core';
import {CayCanh} from "../model/tree";
import {collection, deleteDoc, doc, Firestore, onSnapshot, setDoc, updateDoc} from "@angular/fire/firestore";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CardService {

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
