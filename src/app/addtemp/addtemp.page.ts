import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../storage.service';

@Component({
  selector: 'app-addtemp',
  templateUrl: './addtemp.page.html',
  styleUrls: ['./addtemp.page.scss'],
})
export class AddtempPage implements OnInit {

  creationtime: string = new Date().toISOString();
  temp = 36.7;
  tempbar = 36.7;
  child = '';
  currentFeed: any = {};
  items: Item[] = [];
  newItem: Item = <Item>{};

  constructor(private miscDataService: MiscDataService, private navCtrl: NavController, 
              private storage: Storage, private storageService: StorageService) { 
    this.currentFeed = {};
    this.currentFeed = this.miscDataService.currentFeed;
    if (this.currentFeed !== {}) {
      console.log('feed id = ', this.miscDataService.currentFeed);
    } else {
      this.navCtrl.navigateBack(['/mainfeed']);
    }

    this.child = this.currentFeed;
  }

  ngOnInit() {
  }

  refreshtmp() {
    this.temp = this.tempbar;
  }

  refreshtmpbar() {
    this.tempbar = this.temp;
  }

  cancel() {
    this.navCtrl.back();
  }

  addtemp() {
    var temp = {name: this.child, tmp: this.temp, date: this.creationtime};

    this.newItem.id = Date.now();
    this.newItem.name = this.child;
    this.newItem.tmp = this.temp.toString();
    this.newItem.modified = this.creationtime;

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.loadItems();
    })

    console.log(this.newItem);
    this.navCtrl.back();
  }

  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    })
  }

}
