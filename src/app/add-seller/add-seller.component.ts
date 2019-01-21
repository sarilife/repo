import { Component, OnInit } from '@angular/core';
import { Seller } from '../shared/models/seller.models';
import { FormGroup, FormControl } from '@angular/forms';
import { SellerService } from '../shared/services/seller.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-add-seller',
    templateUrl: './add-seller.component.html',
    styleUrls: ['./add-seller.component.css']
})
export class AddSellerComponent implements OnInit {

    public seller: Seller;
    sellerForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        phone_number: new FormControl(''),
    });
    constructor(public router: Router, public sellerService: SellerService) { }

    ngOnInit() {
    }
    onSubmit() {
        // console.warn(this.sellerForm.value);
        this.seller = new Seller(this.sellerForm.value.name,
            this.sellerForm.value.email,
            this.sellerForm.value.phone_number)
        this.sellerService.seller1 = this.seller;
        this.sellerService.sellerAsyncPost(this.seller).subscribe(
            (e) => {

                this.router.navigate(['/add_bid_item']);
            }
        );




    }

}
