import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscDataService {
  currentFeed: any = {};

  constructor() { }

  setcurrentfeed(feed) {
    this.currentFeed = feed;
  }
}
