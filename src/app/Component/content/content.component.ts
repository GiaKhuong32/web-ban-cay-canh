import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, isFormGroup, ReactiveFormsModule} from "@angular/forms";
export interface CayCanh {
  id: string,
  img: string,
  name: string,
  description: string,
  price: string,
  status:string,
  quality:number,
}
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() item: CayCanh[]=[]
  deleteitem(index:number){
    this.item.splice(index,1);
  }
  @ViewChild('editDialog', { static: true })
  dialogedit!: ElementRef<HTMLDialogElement>;
  cdredit = inject(ChangeDetectorRef);
  openDialog(listitem: CayCanh) {
    this.updateform.patchValue(listitem)
    this.dialogedit.nativeElement.showModal();
    this.cdredit.detectChanges();
    console.log(this.updateform.value)
  }
  closeDialog() {
    this.dialogedit.nativeElement.close();
    this.cdredit.detectChanges();
  }
  updateform= new FormGroup({
    id: new FormControl(''),
    img: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });
  updateItem(){
    let updateitems: CayCanh ={
      id:this.updateform.value.id || '',
      img:this.updateform.value.img || '',
      name:this.updateform.value.name||'',
      description:this.updateform.value.description||'',
      price:this.updateform.value.price||'',
      status:"Con Hang",
      quality:1,
    }
   let space = this.item.findIndex(item => item.id === updateitems.id);
    if(space!=-1){
      this.item[space]=updateitems;
      console.log(this.item[space])
    }
    this.closeDialog()
  }
  @Output() newcardinvent = new EventEmitter<CayCanh>();
  addcard(card:CayCanh) {
    this.newcardinvent.emit(card);
  }
}
