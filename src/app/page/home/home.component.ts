import { Component } from '@angular/core';
import { ContentComponent} from "../../Component/content/content.component";
import {CardService} from "../../services/card.service";
import {ImgtreeComponent} from "../../Component/imgtree/imgtree.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentComponent,
    ImgtreeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public cardServices:CardService){
  }


}
