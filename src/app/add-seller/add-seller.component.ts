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
        this.seller = new Seller(null, this.sellerForm.value.name,
            this.sellerForm.value.email,
            this.sellerForm.value.phone_number)
        // this.sellerService.seller1 = this.seller;
        this.sellerService.sellerAsyncPost(this.seller).subscribe(
            (e) => {

                // console.log(e.seller_id);
                // console.log("1111", e);
                // this.sellerService.sellerAsyncGetByEmail(this.seller.email).subscribe((e1) => {
                //     console.log("2222", e1);

                this.sellerService.num = e.seller_id;
                // console.log(this.sellerService.num);
                this.router.navigate(['/add_bid_item']);
                // }



            }
        );




    }

}
