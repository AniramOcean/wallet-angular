import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseAddComponent } from './purchase-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  TuiFieldErrorModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule, TuiUnfinishedValidatorModule,
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";

@NgModule({
  declarations: [
    PurchaseAddComponent,
  ],
  exports: [
    PurchaseAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiFieldErrorModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiUnfinishedValidatorModule,
  ]
})
export class PurchaseAddModule { }
