import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../shared/models/advertisement.model';
import { AdvertisementService } from '../shared/services/advertisement.service';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

    public advertisements: Advertisement[];
    constructor(public advertisementService: AdvertisementService) {

    }

    ngOnInit() {

        this.advertisementService.advertisementAsyncGet().subscribe(advertisements => this.advertisements = advertisements)
    }
}
