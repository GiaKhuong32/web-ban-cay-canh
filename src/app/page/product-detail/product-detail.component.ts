import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  constructor(
    public cardService: CardService,
    private activatedRoutes: ActivatedRoute,
    private router: Router
  ) {}

  productdetail: any;
  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.params['id'];
    this.productdetail = this.cardService.getItemById(id);
  }
}
