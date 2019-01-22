import { Component, OnInit } from '@angular/core';
import { BidItemService } from '../shared/services/biditem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BidItem } from '../shared/models/biditem.model';

@Component({
    selector: 'app-seller-news',
    templateUrl: './seller-news.component.html',
    styleUrls: ['./seller-news.component.css']
})
export class SellerNewsComponent implements OnInit {

    // public bidItem: BidItem;
    constructor(public router: Router, public bidItemService: BidItemService, public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.bidItemService.refreshList();
        // console.log(this.bidItemService.buyer,
        //     this.bidItemService.seller,
        //     this.bidItemService.bidItem[0].current_price);
        // this.bid_id = Number(this.route.snapshot.paramMap.get('bid_id'));
        // this.bidItemService.bidItemAsyncGetItemById(this.bid_id).subscribe((bidItem) => {
        //     this.bidItem = bidItem;
        // });
    }
    change() {
        this.bidItemService.bidItemAsyncDeleteItemById(
            this.bidItemService.bidItem[0].bid_item_id
        ).subscribe((e) => {
            this.router.navigate(['/advertisements']);
        }

        );

    }

}
