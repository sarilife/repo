import { Component, OnInit } from '@angular/core';
import { BidItem } from '../shared/models/biditem.model';
import { BidItemService } from '../shared/services/biditem.service';
import { SellerService } from '../shared/services/seller.service';
import { Seller } from '../shared/models/seller.models';

@Component({
    selector: 'app-bid-item',
    templateUrl: './bid-item.component.html',
    styleUrls: ['./bid-item.component.css']
})
export class BidItemComponent implements OnInit {

    isValid: boolean = false;
    // public bidItem: BidItem[];
    public seller: Seller;
    constructor(public sellerService: SellerService, public bidItemService: BidItemService) {

    }

    ngOnInit() {
        this.bidItemService.refreshList();
        
        this.bidItemService.bidItemAsyncGet().subscribe((t) => {
            if((Number((new Date()).getSeconds()) - Number(t[0].time_end)) == 0){
                t.shift();
                this.bidItemService.refreshList();
            }
        })

        this.bidItemService.bidItemAsyncGet().subscribe((e) => {
            console.log(e[0].fixed_price)
            if (e[0].fixed_price == 0) {
                this.isValid = true;
                this.sellerService.sellerAsyncGetById(e[0].seller_id).subscribe(seller => {
                    this.seller = seller;
                })
            }
        });



        // this.bidItemService.bidItemAsyncGet().subscribe(bidItem => {
        //     this.bidItem = bidItem;

        // })

    }




}
