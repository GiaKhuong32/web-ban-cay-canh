import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input, OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, isFormGroup, ReactiveFormsModule} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {CayCanh} from "../../model/tree";
import {FirebaseService} from "../../services/firebase.service";
import {ImgtreeComponent} from "../imgtree/imgtree.component";
import {Router} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ImgtreeComponent,
    SharedModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit{
  constructor(public cardServices:CardService,private router: Router) {
  }

  products: any = [];

  ngOnInit(): void {
    this.products = this.cardServices.getProduct();
  }

  navigateToDetail(id: string) {
    this.cardServices.getItemById(id);
    this.router.navigate(['/home/product-detail/', id]);
  }
}

