import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { SellerComponent } from './seller/seller.component';
import { AddSellerComponent } from './add-seller/add-seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { AddBidItemComponent } from './add-bid-item/add-bid-item.component';
import { BidItemComponent } from './bid-item/bid-item.component';
import { BidBuyerComponent } from './bid-buyer/bid-buyer.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "advertisements", component: AdvertisementComponent },
    { path: "sellers", component: SellerComponent },
    { path: "buyers", component: BuyerComponent },
    { path: "add_ads", component: AddAdvertisementComponent },
    { path: "add_seller", component: AddSellerComponent },
    { path: "add_buyer", component: AddBuyerComponent },
    { path: "add_bid_item", component: AddBidItemComponent },
    { path: "bid_item", component: BidItemComponent },
    { path: "buyer/bid/:id", component: BidBuyerComponent }





    // {path:"", redirectTo:"/home",pathMatch:"full"}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
