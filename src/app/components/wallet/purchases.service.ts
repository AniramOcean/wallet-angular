import {Inject, Injectable} from '@angular/core';
import {Purchase} from "../../shared/interfaces/Purchase";
import {IPurchasesApiService, IPurchasesApiServiceToken} from "../../shared/interfaces/IPurchasesApiService";

@Injectable()
export class PurchasesService {
  private purchases: Purchase[] = [];
  private summary = 0;

  constructor(
    @Inject(IPurchasesApiServiceToken)
    private purchaseApiService: IPurchasesApiService) {
  }

  get walletPurchases(): Purchase[] {
    return this.purchases;
  }

  get walletSummary(): number {
    return this.summary;
  }

  initialize() {
    return this.purchaseApiService.getAll().subscribe(data => {
      this.setPurchases(data);
    })
  }

  setPurchases(purchases: Purchase[]) {
    this.purchases = purchases;
    this.updateSum();
  }

  addPurchase(purchase: Purchase) {
    this.purchases.push(purchase);
    this.updateSum();
  }

  private updateSum() {
    this.summary = this.purchases
      .reduce((acc, sum) => acc + +sum.price, 0);
  }
}
