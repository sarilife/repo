import { Component, OnInit } from '@angular/core';
import { BidItem } from '../shared/models/biditem.model';
import { BidItemService } from '../shared/services/biditem.service';

@Component({
  selector: 'app-bid-item',
  templateUrl: './bid-item.component.html',
  styleUrls: ['./bid-item.component.css']
})
export class BidItemComponent implements OnInit {


    public bidItem: BidItem[];
    constructor(public bidItemService: BidItemService) {

    }

    ngOnInit() {

        this.bidItemService.bidItemAsyncGet().subscribe(bidItem => {
            this.bidItem = bidItem;


        }
        )
    }

}
