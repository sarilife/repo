import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../models/seller.models';

@Injectable()
export class SellerService {

    constructor(public httpClient: HttpClient) { }

    sellerAsyncPost(seller: Seller): Observable<Seller> {
        return this.httpClient.post("http://localhost:8000/api/Seller/", seller)
            .map((seller: Seller) => seller);
    }

    sellerAsyncGet(): Observable<Seller[]> {
        return this.httpClient.get("http://localhost:8000/api/Seller/")
            .map((seller: Seller[]) => seller);
    }

}
