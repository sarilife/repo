import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "advertisements", component: AdvertisementComponent },
    { path: "add_ads", component: AddAdvertisementComponent },

    // {path:"", redirectTo:"/home",pathMatch:"full"}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
