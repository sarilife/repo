import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from '../models/advertisement.model';

@Injectable({
    providedIn: 'root'
})
export class AdvertisementService {

    constructor(public httpClient: HttpClient) { }

    advertisementAsyncPost(advertisement: Advertisement): Observable<Advertisement> {
        return this.httpClient.post("http://localhost:8000/api/Advertisement/", advertisement)
            .map((advertisement: Advertisement) => advertisement);
    }

    advertisementAsyncGet(): Observable<Advertisement[]> {
        return this.httpClient.get("http://localhost:8000/api/Advertisement/")
            .map((Advertisements: Advertisement[]) => Advertisements);
    }

}
