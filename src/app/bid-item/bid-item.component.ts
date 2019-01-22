import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BidItem } from '../shared/models/biditem.model';
import { BidItemService } from '../shared/services/biditem.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bid-item',
    templateUrl: './bid-item.component.html',
    styleUrls: ['./bid-item.component.css']
})
export class BidItemComponent implements OnInit {



    // public bidItem: BidItem[];
    constructor(public route: ActivatedRoute, public bidItemService: BidItemService) {

    }

    ngOnInit() {
        this.bidItemService.refreshList();
        
        // this.bidItemService.bidItemAsyncGet().subscribe(bidItem => {
        //     this.bidItem = bidItem;
        // }
        // )
    }





}
