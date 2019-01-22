import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import "rxjs/Rx";
import { HttpClientModule } from '@angular/common/http';
import { AdvertisementService } from './shared/services/advertisement.service';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { SellerComponent } from './seller/seller.component';
import { SellerService } from './shared/services/seller.service';
import { AddSellerComponent } from './add-seller/add-seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { BuyerService } from './shared/services/buyer.service';
import { ItemComponent } from './item/item.component';
import { BidItemComponent } from './bid-item/bid-item.component';
import { AddBidItemComponent } from './add-bid-item/add-bid-item.component';
import { BidItemService } from './shared/services/biditem.service';
import { BidBuyerComponent } from './bid-buyer/bid-buyer.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdvertisementComponent,
        AddAdvertisementComponent,
        SellerComponent,
        AddSellerComponent,
        BuyerComponent,
        AddBuyerComponent,
        ItemComponent,
        BidItemComponent,
        AddBidItemComponent,
        BidBuyerComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        SlideshowModule,
        HttpClientModule,
        FormsModule,
        QRCodeModule,
        ReactiveFormsModule
    ],
    providers: [AdvertisementService, SellerService, BuyerService
        , BidItemService],
    bootstrap: [AppComponent]
})
export class AppModule { }
