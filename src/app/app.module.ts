import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TUI_SANITIZER, TuiDialogModule, TuiRootModule, TuiNotificationsModule} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletModule } from './components/wallet/wallet.module';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SidebarModule} from "./components/sidebar/sidebar.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WalletModule,
    SidebarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
  ]
})
export class AppModule { }
