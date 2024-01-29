import { Injectable } from '@angular/core';
import {CayCanh} from "../model/tree";
import {collection, deleteDoc, doc, Firestore, onSnapshot, setDoc, updateDoc} from "@angular/fire/firestore";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore:Firestore) {
  }

  async add(addItem: CayCanh){
    try {
      let id = Math.floor(Math.random() * 1000).toString();
      const docRef = collection(this.firestore, "products")
      const addProduct = {
        id: id,
        name: addItem['name'],
        img: addItem['img'],
        description: addItem['description'],
        price: addItem['price'],
        quantity: addItem['quantity'],
        status: addItem['status']
      }

      await setDoc(doc(docRef, id), addProduct).then()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async update(item:CayCanh){
    const docRef = doc(this.firestore, "products", item['id']);
    const itemUpdate = {
      id: item['id'],
      name: item['name'],
      img: item['img'],
      description: item['description'],
      price: item['price'],
      quantity: item['quantity'],
      status: item['status']
    }
    await updateDoc(docRef, itemUpdate).then();
  }

  async delete(item:DocumentData){
    await deleteDoc(doc(this.firestore, "products", item['id'])).then();
  }
}
