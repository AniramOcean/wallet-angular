import {IPurchasesApiService} from "../interfaces/IPurchasesApiService";
import {Purchase} from "../interfaces/Purchase";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PurchasesApiMockService implements IPurchasesApiService{
  add(entity: Purchase): Observable<any>{
    // @ts-ignore
    return undefined;
  }

  delete(id: string): Observable<any>{
    // @ts-ignore
    return undefined;
  }

  getAll(): Observable<Purchase[]> {
    return of(
      [
      {
        id: 1,
        title: 'Проезд на метро',
        price: 50,
        comment: 'Проезд подорожал',
      },
      {
        id: 2,
        title: 'Iphone XXL',
        price: 120000,
        comment: 'Подарок на день рождения',
      },
      {
        id: 3,
        title: 'Дошик',
        price: 100
      },
      {
        id: 4,
        title: 'Coffee',
        price: 3000,
        comment: 'Хватит на 2 месяца'
      },
    ]
    );
  }

}
