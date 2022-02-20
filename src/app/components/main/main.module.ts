import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {SidebarModule} from "./sidebar/sidebar.module";
import {WalletModule} from "./wallet/wallet.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    WalletModule
  ]
})
export class MainModule { }
