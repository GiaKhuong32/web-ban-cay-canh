import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, isFormGroup, ReactiveFormsModule} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {CayCanh} from "../../model/tree";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  constructor(public cardServices:CardService,public firebaseService:FirebaseService) {
  }
  @Input() item: CayCanh[]=[]

  @Output() newcardinvent = new EventEmitter<CayCanh>();
  addcard(card:CayCanh) {
    this.newcardinvent.emit(card);
  }
}

