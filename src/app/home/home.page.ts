import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { AdmobFreeService } from '../service/admobfree.service.ts.service';

declare var StartAppAds: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private platform: Platform) {
    this.platform.ready().then(() => {
      if(this.platform.is('android')) {
        StartAppAds.showBanner();
      }
    });
  }

  gotocalc() {
    this.router.navigate(['/calculator']);
  }

  gotohistory() {
    this.router.navigate(['/history']);
  }

  gotobabieslist() {
    this.router.navigate(['/babieslist']);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    //this.admobFreeService.BannerAd();
  }

  gotoabout() {
    this.router.navigate(['/about']);
  }

}
