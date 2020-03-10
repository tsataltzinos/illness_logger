import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../storage.service';

@Component({
  selector: 'app-adddrug',
  templateUrl: './adddrug.page.html',
  styleUrls: ['./adddrug.page.scss'],
})
export class AdddrugPage implements OnInit {

  drugsel = '';
  creationtime: string = new Date().toISOString();
  child = '';
  currentFeed: any = {};
  items: Item[] = [];
  newItem: Item = <Item>{};

  constructor(private miscDataService: MiscDataService, private navCtrl: NavController, 
              private storageService: StorageService) { 
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

  cancel() {
    this.navCtrl.back();
  }

  refreshdrug() {

  }

  adddrug() {
    this.newItem.id = Date.now();
    this.newItem.name = this.child;
    this.newItem.tmp = this.drugsel;
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
    });
  }
}
