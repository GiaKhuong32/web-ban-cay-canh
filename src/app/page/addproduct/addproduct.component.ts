import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CardService} from "../../services/card.service";
import {CayCanh} from "../../model/tree";

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {
  constructor(public route:Router,public cardServices:CardService) {
  }
  @ViewChild('addDialog', { static: true })
  dialogadd!: ElementRef<HTMLDialogElement>;
  cdradd = inject(ChangeDetectorRef);
  openDialog() {
    this.dialogadd.nativeElement.showModal();
    this.cdradd.detectChanges();
  }
  closeDialog() {
    this.dialogadd.nativeElement.close();
    this.cdradd.detectChanges();
  }

  addForm = new FormGroup({
    id: new FormControl(''),
    img: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),

  });
  @Output() newItemEvent = new EventEmitter<CayCanh>();
  addItem(newItem: CayCanh) {
    this.cardServices.itemcard.push(newItem);
  }
  onSubmit() {
    let additems: CayCanh ={
      id:this.addForm.value.id || '',
      img:this.addForm.value.img || '',
      name:this.addForm.value.name||'',
      description:this.addForm.value.description||'',
      price:this.addForm.value.price||'',
      status:"Con Hang",
      quantity:1,
    }
    this.newItemEvent.emit(additems)
    this.route.navigate([''])
    this.addItem(additems)
  }
}
