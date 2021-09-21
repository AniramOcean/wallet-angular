import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseAddComponent } from './purchase-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  TuiFieldErrorModule,
  TuiInputDateModule, TuiInputDateTimeModule,
  TuiInputModule,
  TuiInputNumberModule, TuiUnfinishedValidatorModule,
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiPortalHostModule} from "@taiga-ui/cdk";

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
    TuiInputDateTimeModule,
    TuiPortalHostModule,
  ]
})
export class PurchaseAddModule { }
