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
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdvertisementComponent,
        AddAdvertisementComponent,
        SellerComponent,
        AddSellerComponent,
        BuyerComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        SlideshowModule,
        HttpClientModule,
        FormsModule,


        ReactiveFormsModule
    ],
    providers: [AdvertisementService, SellerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
