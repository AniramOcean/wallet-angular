import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { PurchasePreviewModule } from './purchase-preview/purchase-preview.module';
import { PurchaseAddModule } from './purchase-add/purchase-add.module';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiSvgModule} from "@taiga-ui/core";
import {PurchasesService} from "./purchases.service";
import {IPurchasesApiServiceToken} from "../../../../shared/interfaces/IPurchasesApiService";
import {PurchasesApiService} from "../../../../shared/services/purchasesApi.service";

@NgModule({
  declarations: [
    WalletComponent
  ],
  exports: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    PurchasePreviewModule,
    PurchaseAddModule,
    TuiMoneyModule,
    TuiSvgModule,
  ],
  providers: [
    PurchasesService,
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiService}
  ]
})
export class WalletModule { }
