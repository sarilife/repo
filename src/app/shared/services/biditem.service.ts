import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BidItem } from '../models/biditem.model';
import { Seller } from '../models/seller.models';

@Injectable()
export class BidItemService {

    constructor(public httpClient: HttpClient) { }

    bidItemAsyncPost(bidItem: BidItem): Observable<BidItem> {
        return this.httpClient.post("http://localhost:8000/api/BidItem/", bidItem)
            .map((bidItem: BidItem) => bidItem);
    }

    bidItemAsyncGet(): Observable<BidItem[]> {
        return this.httpClient.get("http://localhost:8000/api/BidItem/")
            .map((bidItem: BidItem[]) => bidItem);
    }


    bidItemAsyncGetItemById(id): Observable<BidItem> {
        return this.httpClient.get("http://localhost:8000/api/BidItem/" + id + "/")
            .map((bidItem: BidItem) => bidItem);

    }

    bidItemAsyncPutItemById(id, bidItem: BidItem): Observable<BidItem> {
        return this.httpClient.put("http://localhost:8000/api/BidItem/" + id + "/", bidItem)
            .map((bidItem: BidItem) => bidItem);

    }



}
