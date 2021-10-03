import {IPurchasesApiService} from "../interfaces/IPurchasesApiService";
import {Purchase} from "../interfaces/Purchase";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {host} from "../consts/host";


const prefix = 'purchases';

@Injectable()
export class PurchasesApiService implements IPurchasesApiService{

  constructor(private httpClient: HttpClient) {
  }

  add(entity: Purchase): Observable<void> {
    return this.httpClient.post<void>(`${host}/${prefix}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${prefix}/${id}`);
  }

  getAll(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(`${host}/${prefix}`);
  }

}
