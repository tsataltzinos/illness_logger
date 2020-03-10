import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item, ChildItem } from '../storage.service';

@Component({
  selector: 'app-babieslist',
  templateUrl: './babieslist.page.html',
  styleUrls: ['./babieslist.page.scss'],
})
export class BabieslistPage implements OnInit {

  babysel: string;
  children: ChildItem[] = [];
  babyid: string;
  
  constructor(private router: Router, private miscDataService: MiscDataService, 
              private storage: Storage, private storageService: StorageService) { 
      this.ngOnInit();
}

  ngOnInit() {
    this.loadItems();
  }

  ionViewDidEnter() {
    this.loadItems();
  }

  gotoaddbaby() {
    this.router.navigate(['/addbaby']);
  }

  gotoaupdatebaby(babyid) {
    this.miscDataService.setcurrentfeed(babyid);
    this.router.navigate(['/updatebaby']);
  }

  loadItems() {
    this.storageService.getChildren().then(children => {
      this.children = children;
    });
  }

}
