import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BananaColor, BananaRating, BananaModel} from "../model/banana-model";

@Injectable({
  providedIn: 'root'
})
export class BananaService {

  constructor() {
  }

  // fake http request that return a banana item after 3 seconds
  getBanana(): Observable<any> {
    console.log('Get Banana Started');
    const milliseconds = 3000; // 3 seconds
    return new Observable(subscriber => {
      setTimeout(() => {
        console.log('Done fetching Banana');
        const newBanana = {
          color: BananaColor.YELLOW,
          size: BananaModel.BIG,
          rating: BananaRating.EXCELLENT
        }
        subscriber.next(newBanana);
        subscriber.complete()
      }, milliseconds)
    })
  }
}
