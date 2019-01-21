import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../shared/models/advertisement.model';
import { AdvertisementService } from '../shared/services/advertisement.service';
import { IImage } from 'ng-simple-slideshow';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
    imageUrls: (string | IImage)[] = [

    ];

    height: string = '600px';
    minHeight: string;
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = false;
    autoPlay: boolean = true;
    autoPlayInterval: number = 2000;
    stopAutoPlayOnSlide: boolean = true;
    debug: boolean = false;
    backgroundSize: string = 'cover';
    backgroundPosition: string = 'center center';
    backgroundRepeat: string = 'no-repeat';
    showDots: boolean = true;
    dotColor: string = '#FFF';
    showCaptions: boolean = true;
    captionColor: string = '#FFF';
    captionBackground: string = 'rgba(0, 0, 0, .35)';
    lazyLoad: boolean = false;
    hideOnNoSlides: boolean = false;
    width: string = '100%';


    public advertisements: Advertisement[];
    constructor(public advertisementService: AdvertisementService) {

    }

    ngOnInit() {

        this.advertisementService.advertisementAsyncGet().subscribe(advertisements => {
            this.advertisements = advertisements;

            advertisements.forEach(element => {
                this.imageUrls.push(
                    { url: String(element.link), caption:element.name + "  " + element.description  , href: '#config' },
                )
            });

        }
        )
    }
}
