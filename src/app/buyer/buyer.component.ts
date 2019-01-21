import { Component, OnInit } from '@angular/core';
import { Buyer } from '../shared/models/buyer.model';
import { BuyerService } from '../shared/services/buyer.service';

@Component({
    selector: 'app-buyer',
    templateUrl: './buyer.component.html',
    styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {


    public buyers: Buyer[];
    constructor(public buyerService: BuyerService) {

    }

    ngOnInit() {

        this.buyerService.buyerAsyncGet().subscribe(buyers => {
            this.buyers = buyers;


        }
        )
    }

}
