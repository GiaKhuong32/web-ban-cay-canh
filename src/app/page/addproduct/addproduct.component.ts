import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CardService} from "../../services/card.service";
import {CayCanh} from "../../model/tree";
import {TuiCheckboxModule, TuiInputModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiDialogModule, TuiHintModule} from "@taiga-ui/core";
import {DocumentData} from "@angular/fire/compat/firestore";
import {TuiAutoFocusModule} from "@taiga-ui/cdk";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    TuiCheckboxModule,
    TuiDialogModule,
    TuiInputModule,
    TuiButtonModule,
    TuiHintModule,
    TuiAutoFocusModule,

  ],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {
  constructor(public firebaseService:FirebaseService) {
  }

  addForm = new FormGroup({
    id: new FormControl(''),
    img: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),

  });

  onSubmit() {
    let additems: CayCanh ={
      id:this.addForm.value.id || '',
      img:this.addForm.value.img || '',
      name:this.addForm.value.name||'',
      description:this.addForm.value.description||'',
      price:this.addForm.value.price||'',
      status:"stocking",
      quantity:1,
    }
    this.firebaseService.add(additems);
    this.addForm.reset();
    this.open = false;
  }
  open = false;

  showDialog(): void {
    this.open = true;
  }
  openedit = false;
  showeditDialog(listitem: DocumentData) {
    this.updateform.patchValue(listitem);
    this.openedit = true;
  }
  updateform= new FormGroup({
    id: new FormControl(''),
    img: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });
  updateItem(){
    let items: CayCanh ={
      id:this.updateform.value.id || '',
      img:this.updateform.value.img || '',
      name:this.updateform.value.name||'',
      description:this.updateform.value.description||'',
      price:this.updateform.value.price||'',
      status:"Con Hang",
      quantity:1,
    }
    this.firebaseService.update(items).then();
    this.updateform.reset();
    this.openedit = false;
  }
  delete(item:DocumentData){
    this.firebaseService.delete(item).then();
  }
}
