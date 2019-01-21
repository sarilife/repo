import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Buyer } from '../models/buyer.model';

@Injectable()
export class BuyerService {

    constructor(public httpClient: HttpClient) { }

    buyerAsyncPost(buyer: Buyer): Observable<Buyer> {
        return this.httpClient.post("http://localhost:8000/api/Buyer/", buyer)
            .map((buyer: Buyer) => buyer);
    }

    buyerAsyncGet(): Observable<Buyer[]> {
        return this.httpClient.get("http://localhost:8000/api/Buyer/")
            .map((buyer: Buyer[]) => buyer);
    }

}
