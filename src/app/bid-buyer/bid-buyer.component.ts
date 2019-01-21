import { Component, OnInit } from '@angular/core';
import { BidItemService } from '../shared/services/biditem.service';
import { BidItem } from '../shared/models/biditem.model';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bid-buyer',
    templateUrl: './bid-buyer.component.html',
    styleUrls: ['./bid-buyer.component.css']
})
export class BidBuyerComponent implements OnInit {

    public id: number;
    public bidItems: BidItem[];
    constructor(public route: ActivatedRoute, public bidItemService: BidItemService) { }

    ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.bidItemService.bidItemAsyncGetItemById(this.id).subscribe(bidItems => {
            this.bidItems = bidItems
            console.log(this.bidItems);
        }
        );

    }

}
