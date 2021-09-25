import {IPurchasesApiService} from "../interfaces/IPurchasesApiService";
import {Purchase} from "../interfaces/Purchase";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PurchasesApiMockService implements IPurchasesApiService{
  add(entity: Purchase): Observable<any> | undefined {
    return undefined;
  }

  delete(id: number): Observable<any> | undefined {
    return undefined;
  }

  getAll(): Observable<Purchase[]> {
    return of(
      [
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
    );
  }

}
