import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BidItem } from '../shared/models/biditem.model';
import { BidItemService } from '../shared/services/biditem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Seller } from '../shared/models/seller.models';
import { SellerService } from '../shared/services/seller.service';

@Component({
    selector: 'app-add-bid-item',
    templateUrl: './add-bid-item.component.html',
    styleUrls: ['./add-bid-item.component.css']
})
export class AddBidItemComponent implements OnInit {

    public fileSelected: String;
    public bidItem: BidItem;
    itemBidForm = new FormGroup({
        name: new FormControl(''),
        fixed_price: new FormControl(''),
        start_price: new FormControl(''),
        time_end: new FormControl(''),
        // image: new FormControl('')
    });
    url: any;
    constructor(public sellerService: SellerService, public route: ActivatedRoute, public router: Router, public bidItemService: BidItemService) { }

    ngOnInit() {
        console.log(this.route.snapshot.paramMap);
    }
    onSubmit() {

        // console.warn(this.sellerService.seller1);
        this.bidItem = new BidItem(
            null,
            this.itemBidForm.value.name,
            // this.itemBidForm.value.image,
            this.fileSelected,
            this.itemBidForm.value.start_price,
            // this.sellerService.seller1,
            Number(this.sellerService.num),
            null,
            this.itemBidForm.value.fixed_price,
            this.itemBidForm.value.start_price,
            Number((new Date()).getSeconds()),
            Number((new Date()).getSeconds() + Number(this.itemBidForm.value.time_end) * 1000 ))
        console.log(this.bidItem);

        this.bidItemService.bidItemAsyncPost(this.bidItem).subscribe(
            (e) => {

                this.router.navigate(['/bid_item']);
            }
        );
        // console.log(this.fileSelected);
    }

    onFileChange($event) {
        // this.fileSelected = $event.target.files[0];//files[0];
        // console.log($event.target.files[0]);

        let fileSelected = new FormData();

        // console.log(formData);
        let reader = new FileReader();
        reader.readAsDataURL($event.target.files[0]);
        reader.onload = (e) => {
            // console.log(e.target.result);
            this.fileSelected = e.target.result;
        }
        // console.log($event.target.files[0]);
        // console.log($event.path[0].files);
        // let reader = new FileReader();

        // reader.onload = (e: any) => {
        //     this.imageVolunteer.avatar = e.target.result;
        //     // this.imageClicked  = e.target.result;
        //   }

        // reader.readAsDataURL($event.path[0].files[0]);
        // reader.onload = (event1) => { // called once readAsDataURL is completed
        //     this.url = event1.target;
        //     console.log(event1.target);
        // }
        // console.log(reader);
    }


}
