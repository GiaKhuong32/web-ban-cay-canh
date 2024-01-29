import {Injectable} from '@angular/core';
import {CayCanh} from "../model/tree";
import {collection, deleteDoc, doc, Firestore, onSnapshot, setDoc, updateDoc} from "@angular/fire/firestore";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: Firestore) {
    onSnapshot(collection(this.firestore, "products"), (collection) => {
      this.itemcard = [];
      collection.forEach((doc) => {
        this.itemcard.push(doc.data() as any);
      })
    });
  }

  itemcard: CayCanh[] = [
    // {
    //   id:'1',
    //   img:'./assets/img/Cây%20Lưỡi%20Hổ.jpg',
    //   name:'Cây lưỡi hổ',
    //   quantity:1,
    //   price:'500.000',
    //   status: 'còn hàng',
    //   description:'Cây này đẹp lắm',
    // }
  ]

  getProduct() {
    return this.itemcard;
  }


  itemlistcard: CayCanh[] = []

  async addtocard(newItem: CayCanh) {
    const docRef = doc(this.firestore, 'card', newItem.id.toString());

    try {
      await setDoc(docRef, newItem);

      // Call the synchronous addToCart function after successful Firestore update
      this.addToLocalCart(newItem);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  addToLocalCart(card: CayCanh) {
    let index = this.itemlistcard.findIndex((e) => e.id === card.id);

    if (index === -1) {
      card.quantity = 1;
      this.itemlistcard.push(card);
    } else {
      this.itemlistcard[index].quantity++;
    }

    alert('Thêm thành công với sản phẩm ' + card.name + 'vào giỏ hàng');
  }

  getItemById(id: number | string) {
    const product = this.itemcard.find((product) => product.id === id);
    return product || {};
  }

  insceaseQuantity(index: CayCanh){
    let indexCard = this.itemlistcard.findIndex((e) => e.id === index.id);
    if (indexCard !== -1) {
      this.itemlistcard[indexCard].quantity++;
    }
  }
  descreaseQuantity(index: CayCanh){
    let indexCard = this.itemlistcard.findIndex((e) => e.id === index.id);
    if (indexCard !== -1) {
      if (this.itemlistcard[indexCard].quantity === 1) {
        this.itemlistcard.splice(indexCard, 1);
        return;
      } else {
        this.itemlistcard[indexCard].quantity--;
        return;
      }
    }
  }

  sumCardPrice(){
    let sum = 0;
    for (let i = 0; i < this.itemlistcard.length; i++) {
      sum += parseInt(this.itemlistcard[i].price) * this.itemlistcard[i].quantity;
    }
    return sum;
  }

  async deleteItemInCart(item: CayCanh) {
    const docRef = doc(this.firestore, 'card', item.id);

    try {
      await deleteDoc(docRef);
      this.delItemInLocalCart(item.id);
    } catch (error) {
      console.error('Error deleting from cart:', error);
    }
  }

  delItemInLocalCart(id: string) {
    let index = this.itemlistcard.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.itemlistcard.splice(index, 1);
    }
  }
}
