import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CayCanh} from "../content/content.component";
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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
  @ViewChild('cardDialog', { static: true })
  dialogcard!: ElementRef<HTMLDialogElement>;
  cdrcard = inject(ChangeDetectorRef);
  openDialogcard() {
    this.dialogcard.nativeElement.showModal();
    this.cdrcard.detectChanges();
  }
  closeDialogcard() {
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
  onSubmit() {
    let additems: CayCanh ={
      id:this.addForm.value.id || '',
      img:this.addForm.value.img || '',
      name:this.addForm.value.name||'',
      description:this.addForm.value.description||'',
      price:this.addForm.value.price||'',
      status:"Con Hang",
      quality:1,
    }
  this.newItemEvent.emit(additems)
    this.closeDialog()
  }
  @Input() itemcard: CayCanh[] = [];
}

