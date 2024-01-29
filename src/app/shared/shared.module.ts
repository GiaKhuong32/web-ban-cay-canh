import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TuiDialogModule, TuiAlertModule} from "@taiga-ui/core";
import {RouterOutlet} from "@angular/router";
import {TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiDialogModule,
    TuiAlertModule,
    RouterOutlet,
    TuiIslandModule,
    TuiButtonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiDialogModule,
    TuiAlertModule,
    RouterOutlet,
    TuiIslandModule,
    TuiButtonModule
  ]
})
export class SharedModule { }
