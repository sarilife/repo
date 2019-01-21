import { Component, OnInit } from '@angular/core';
import { SellerService } from '../shared/services/seller.service';
import { Seller } from '../shared/models/seller.models';

@Component({
    selector: 'app-seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


    public sellers: Seller[];
    constructor(public sellerService: SellerService) {

    }

    ngOnInit() {

        this.sellerService.sellerAsyncGet().subscribe(sellers => {
            this.sellers = sellers;


        }
        )
    }

}
