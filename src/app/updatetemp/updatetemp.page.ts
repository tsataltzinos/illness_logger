import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item, ChildItem } from '../storage.service';

@Component({
  selector: 'app-updatetemp',
  templateUrl: './updatetemp.page.html',
  styleUrls: ['./updatetemp.page.scss'],
})
export class UpdatetempPage implements OnInit {

  itemid: number;
  childname: string;
  drugsel: string;
  creationtime: string = new Date().toISOString();
  items: Item[] = [];
  temp = 36.7;
  tempbar = 36.7;

  constructor(private miscDataService: MiscDataService, private navCtrl: NavController,
    private storageService: StorageService) {
}

  ngOnInit() {
    this.itemid = this.miscDataService.currentFeed;
    this.loadtemp(this.itemid);
  }

  loadtemp(item: number) {
    console.log(this.itemid);
    this.storageService.getItems().then(items => {
      this.items = items.filter((measures) => {
        return measures.id === this.miscDataService.currentFeed;
      });
      this.itemid = this.items[0].id;
      this.childname = this.items[0].name;
      this.drugsel = this.items[0].tmp;
      this.creationtime = this.items[0].modified;
      this.tempbar = parseFloat(this.drugsel);
      });
  }

  updatetemp(item: Item = <Item>{}) {
    item.id = this.itemid;
    item.modified = this.creationtime;
    item.name = this.childname;
    item.tmp = this.temp.toString();

    this.storageService.updateItem(item).then(a => {
      console.log('Item updated');
    });
    this.navCtrl.back();
  }

  deltemp(item: Item = <Item>{}) {
    this.storageService.deleteItem(this.itemid).then(item => {
      console.log('Item removed');
    });
    this.navCtrl.back();
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

}
