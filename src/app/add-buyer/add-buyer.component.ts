import { Component, OnInit } from '@angular/core';
import { Buyer } from '../shared/models/buyer.model';
import { BuyerService } from '../shared/services/buyer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-buyer',
    templateUrl: './add-buyer.component.html',
    styleUrls: ['./add-buyer.component.css']
})
export class AddBuyerComponent implements OnInit {

    public buyer: Buyer;
    public bidId: Number;
    buyerForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        phone_number: new FormControl(''),
    });
    constructor(public route: ActivatedRoute, public router: Router, public buyerService: BuyerService) { }

    ngOnInit() {
        this.bidId = Number(this.route.snapshot.paramMap.get('id'));
    }
    onSubmit() {
        console.warn(this.buyerForm.value);
        this.buyer = new Buyer(null, this.buyerForm.value.name,
            this.buyerForm.value.email,
            this.buyerForm.value.phone_number)
        this.buyerService.buyerAsyncPost(this.buyer).subscribe(e => {
            // console.log()
            this.router.navigate(['/bid_buy/bid/' + this.bidId + '/buyer/' +
                e.buyer_id]);

        }
        );

    }

}
