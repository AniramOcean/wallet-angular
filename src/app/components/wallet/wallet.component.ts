import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Purchase} from "../../shared/interfaces/Purchase";
import {PurchasesService} from "./purchases.service";

const data: Purchase[] = [
  {
    title: 'Проезд на метро',
    price: 50,
    comment: 'Проезд подорожал',
  },
  {
    title: 'Iphone XXL',
    price: 120000,
    comment: 'Подарок на день рождения',
  },
  {
    title: 'Дошик',
    price: 100
  },
  {
    title: 'Coffee',
    price: 3000,
    comment: 'Хватит на 2 месяца'
  },
]

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletComponent implements OnInit {
  isAddPurchaseVisible = false;
  currentIndex = -1;

  constructor(private purchasesService: PurchasesService) { }

  get purchases(): Purchase[] {
    return this.purchasesService.walletPurchases;
  }

  get summary(): number {
    return this.purchasesService.walletSummary;
  }

  ngOnInit(): void {
    this.purchasesService.setPurchases(data);
  }

  onClick() {
    this.isAddPurchaseVisible = !this.isAddPurchaseVisible;
  }

  onAdd(purchase: Purchase) {
    this.purchasesService.addPurchase(purchase);
    this.onClick();
  }

  onPurchaseClick(index: number) {
    this.currentIndex = this.currentIndex === index
      ? -1
      : index;
  }

}
