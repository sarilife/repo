import { Component, OnInit } from '@angular/core';
import { BidItemService } from '../shared/services/biditem.service';
import { BidItem } from '../shared/models/biditem.model';
import { Route, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BuyerService } from '../shared/services/buyer.service';
import { Buyer } from '../shared/models/buyer.model';

@Component({
    selector: 'app-bid-buyer',
    templateUrl: './bid-buyer.component.html',
    styleUrls: ['./bid-buyer.component.css']
})
export class BidBuyerComponent implements OnInit {

    public bid_id: String;
    public buyer_id: String;

    public buyer: Buyer;
    public bidItem: BidItem;

    changePriceForm = new FormGroup({
        price: new FormControl('')
    });
    constructor(public buyerService: BuyerService, public route: ActivatedRoute, public bidItemService: BidItemService) { }

    ngOnInit() {

        this.bid_id = String(this.route.snapshot.paramMap.get('bid_id'));
        this.buyer_id = String(this.route.snapshot.paramMap.get('buyer_id'));

        this.bidItemService.bidItemAsyncGetItemById(this.bid_id).subscribe(bidItem => {
            this.bidItem = bidItem;
           
            this.buyerService.buyerAsyncGetById(this.buyer_id).subscribe((buyer) => {
                this.buyer = buyer;
                // console.log(this.buyer, this.bidItem);
            });

         
        });

    }

    onSubmit() {
        this.bidItem.buyer_id = this.buyer.buyer_id;
        this.bidItem.current_price = this.changePriceForm.value.price;
        console.log(this.bid_id, this.bidItem);
        this.bidItemService.bidItemAsyncPutItemById(this.bid_id, this.bidItem).subscribe((e) => {
            this.bidItemService.socket.send("123");
        });
    





    }

}
