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

    public bid_id: number;
    public buyer_id: number;
    public buyers: Buyer[];
    public buyer: Buyer;
    // public bidItems: BidItem[];
    public bidItem: BidItem;
    changePriceForm = new FormGroup({
        price: new FormControl('')
    });
    constructor(public buyerService: BuyerService, public route: ActivatedRoute, public bidItemService: BidItemService) { }

    ngOnInit() {
        this.bid_id = Number(this.route.snapshot.paramMap.get('bid_id'));
        this.buyer_id = Number(this.route.snapshot.paramMap.get('buyer_id'));

        this.bidItemService.bidItemAsyncGetItemById(this.bid_id).subscribe(bidItem => {
            this.bidItem = bidItem;

            this.buyerService.buyerAsyncGetById(this.buyer_id).subscribe((buyer) => {
                this.buyer = buyer;
                console.log(this.buyer, this.bidItem);
            });

            // console.log(this.bidItems);
            // bidItems.forEach(element => {
            //     if (element.bid_item_id == this.bid_id) {
            //         this.bidItem = element;
            //         // console.log(this.bid_id + " - " + this.buyer_id);
            //         this.buyerService.buyerAsyncGet().subscribe(buyers => {
            //             this.buyers = buyers;
            //             this.buyers.forEach(element2 => {
            //                 if (element2.buyer_id == this.buyer_id) {
            //                     this.buyer = element2;
            //                     console.log(this.buyer);
            //                 }
            //             });
            //         })
            //     }
            // });
        }
        );

    }

    onSubmit() {
        // console.log(this.changePriceForm.value.price);
        this.bidItem.buyer_id = this.buyer.buyer_id;
        this.bidItem.current_price = this.changePriceForm.value.price
        this.bidItemService.bidItemAsyncPutItemById(this.bid_id, this.bidItem).subscribe((e) => {
            this.bidItemService.socket.send("123");
        });
        //   this.seller = new Seller(null, this.sellerForm.value.name,
        //     this.sellerForm.value.email,
        //     this.sellerForm.value.phone_number)
        // // this.sellerService.seller1 = this.seller;
        // this.sellerService.sellerAsyncPost(this.seller).subscribe(
        //     (e) => {

        // console.log(e.seller_id);
        // console.log("1111", e);
        // this.sellerService.sellerAsyncGetByEmail(this.seller.email).subscribe((e1) => {
        //     console.log("2222", e1);

        // this.sellerService.num = e.seller_id;
        // // console.log(this.sellerService.num);
        // this.router.navigate(['/add_bid_item']);
        // // }



        //}
        //    );





    }

}
