import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BidItem } from '../models/biditem.model';
import { Seller } from '../models/seller.models';
import { Buyer } from '../models/buyer.model';
import { SellerService } from './seller.service';
import { BuyerService } from './buyer.service';

@Injectable()
export class BidItemService {
    public socket: any;
    public bidItem: BidItem[];
    public seller: Seller;
    public buyer: Buyer;
    constructor(public httpClient: HttpClient, public sellerService: SellerService
        , public buyerService: BuyerService) { }
    refreshList() {

        this.bidItemAsyncGet().subscribe(bidItem => {
            this.bidItem = bidItem;
            this.sellerService.sellerAsyncGetById(bidItem[0].seller_id).subscribe(
                (seller) => {
                    this.seller = seller;
                }
            );
            if (this.bidItem[0].buyer_id != null) {
                this.buyerService.buyerAsyncGetById(this.bidItem[0].buyer_id).subscribe(buyer =>
                    this.buyer = buyer);
            }

        })
    }

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
    bidItemAsyncDeleteItemById(id): Observable<BidItem> {
        return this.httpClient.delete("http://localhost:8000/api/BidItem/" + id + "/")
            .map((bidItem: BidItem) => bidItem);

    }



}
