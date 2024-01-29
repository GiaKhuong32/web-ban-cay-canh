import {ChangeDetectorRef, Component, ElementRef, inject, ViewChild,ChangeDetectionStrategy} from '@angular/core';
import {CardService} from "../../services/card.service";
import {FormsModule} from "@angular/forms";
import {TuiButtonModule, TuiHintModule, TuiScrollbarModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiBadgeModule, TuiCheckboxModule} from "@taiga-ui/kit";
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    FormsModule,
    TuiSvgModule,
    TuiScrollbarModule,
    TuiBadgeModule,
    TuiCheckboxModule,
    TuiButtonModule,
    TuiHintModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  value = 0;
  constructor(public cardServices:CardService) {
  }
  @ViewChild('cardDialog', { static: true })
  dialogcard!: ElementRef<HTMLDialogElement>;
  cdrcard = inject(ChangeDetectorRef);
  openDialogcard() {
    this.dialogcard.nativeElement.showModal();
    this.cdrcard.detectChanges();
  }
  closeDialogcard() {
    this.dialogcard.nativeElement.close();
    this.cdrcard.detectChanges();
  }
}


