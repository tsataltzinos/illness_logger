import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscDataService {
  currentFeed: any = {};
  currentweight: number;

  constructor() { }

  setcurrentfeed(feed) {
    this.currentFeed = feed;
  }

  setcurrentweight(weight) {
    this.currentweight = weight;
  }
}
