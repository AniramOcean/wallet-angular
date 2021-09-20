import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface Purchase {
  title: string;
  price: number;
  comment?: string;
  date?: object
}

const data: Purchase[] = [
  {
    title: 'Проезд на метро',
    price: 50,
    comment: 'Проезд подорожал'
  },
  {
    title: 'Iphone XXL',
    price: 120000,
    comment: 'Подарок на день рождения',
    date: ['12-01-2020']
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
  purchases: Purchase[] = [];
  isAddPurchaseVisible = false;
  summary = 0;

  constructor() { }

  ngOnInit(): void {
    this.purchases = data;
    this.updateSum();
  }

  onClick() {
    this.isAddPurchaseVisible = !this.isAddPurchaseVisible;
  }

  onAdd(purchase: Purchase) {
    this.purchases.push(purchase)
    this.onClick();
    this.updateSum()
  }

  private updateSum() {
    this.summary = this.purchases.reduce((acc, sum) => acc + +sum.price, 0)
  }

}
