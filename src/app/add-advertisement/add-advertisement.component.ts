import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Advertisement } from '../shared/models/advertisement.model';
import { AdvertisementService } from '../shared/services/advertisement.service';

@Component({
    selector: 'app-add-advertisement',
    templateUrl: './add-advertisement.component.html',
    styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {

    public ads: Advertisement;
    adsForm = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        link: new FormControl(''),
    });

    constructor(public advertisementService: AdvertisementService) { }

    ngOnInit() {


    }
    // onSubmit() {
    //     console.log(this.adsForm.value);
    // }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.adsForm.value);
        this.ads = new Advertisement(this.adsForm.value.name,
            this.adsForm.value.link,
            this.adsForm.value.description)
        this.advertisementService.advertisementAsyncPost(this.ads).subscribe(

        );

    }
}
