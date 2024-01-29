import { Component } from '@angular/core';
import { ContentComponent} from "../../Component/content/content.component";
import {CardService} from "../../services/card.service";
import {ImgtreeComponent} from "../../Component/imgtree/imgtree.component";
import {NavbarComponent} from "../../Component/navbar/navbar.component";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentComponent,
    ImgtreeComponent,
    NavbarComponent,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public cardServices:CardService){
  }
}
