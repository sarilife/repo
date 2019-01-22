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

    isValid : boolean = false;
    public bidItem: BidItem[];
    public sellers: Seller[];
    constructor(public sellerService: SellerService,public bidItemService: BidItemService) {

    }

    ngOnInit() {

        this.bidItemService.bidItemAsyncGet().subscribe((e)=>{
            console.log(e[0].fixed_price )
            if(e[0].fixed_price == 0){
                this.isValid = true;
            }
        });

        this.sellerService.sellerAsyncGet().subscribe(sellers => {
            this.sellers = sellers;
        })

        this.bidItemService.bidItemAsyncGet().subscribe(bidItem => {
            this.bidItem = bidItem;

        })

    }




}
