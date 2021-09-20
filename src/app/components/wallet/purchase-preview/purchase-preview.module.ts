import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePreviewComponent } from './purchase-preview.component';
import {TuiBadgeModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    PurchasePreviewComponent
  ],
  exports: [
    PurchasePreviewComponent
  ],
    imports: [
        CommonModule,
        TuiBadgeModule,
    ],

})
export class PurchasePreviewModule { }
