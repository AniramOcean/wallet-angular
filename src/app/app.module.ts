import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TUI_SANITIZER, TuiRootModule} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletModule } from './components/wallet/wallet.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WalletModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
