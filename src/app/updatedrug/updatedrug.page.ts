import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item, ChildItem } from '../storage.service';

@Component({
  selector: 'app-updatedrug',
  templateUrl: './updatedrug.page.html',
  styleUrls: ['./updatedrug.page.scss'],
})
export class UpdatedrugPage implements OnInit {

  itemid: number;
  childname: string;
  drugsel: string;
  creationtime: string = new Date().toISOString();
  items: Item[] = [];

  constructor(private miscDataService: MiscDataService, private navCtrl: NavController,
    private storageService: StorageService) {
}

  ngOnInit() {
    this.itemid = this.miscDataService.currentFeed;
    this.loaddrug(this.itemid);
  }

  cancel() {
    this.navCtrl.back();
  }

  loaddrug(item: number) {
    console.log(this.itemid);
    this.storageService.getItems().then(items => {
      this.items = items.filter((measures) => {
        return measures.id === this.miscDataService.currentFeed;
      });
      this.itemid = this.items[0].id;
      this.childname = this.items[0].name;
      this.drugsel = this.items[0].tmp;
      this.creationtime = this.items[0].modified;
      });
  }

  deldrug(item: Item = <Item>{}) {
    this.storageService.deleteItem(this.itemid).then(item => {
      console.log('Item removed');
    });
    this.navCtrl.back();
  }

  updatedrug(item: Item = <Item>{}) {
    item.id = this.itemid;
    item.modified = this.creationtime;
    item.name = this.childname;
    item.tmp = this.drugsel;

    this.storageService.updateItem(item).then(a => {
      console.log('Item updated');
    });
    this.navCtrl.back();
  }

  refreshdrug() {

  }
}
