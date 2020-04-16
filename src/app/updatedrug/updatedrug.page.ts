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
  weight: number = 10;
  dosage: number;
  usage: string;
  kgs: number;
  baby = 'assets/dose.png';
  drugimg = '';
  disable = true;
  substance: string;

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
    this.refreshcard()
  }

  refreshcard() {
    if (this.drugsel === 'Depon') {
      if (this.weight === null || this.weight === 0) {
        this.dosage = 0;
      } else {
        this.dosage = Math.round((this.weight / 2 + 1) * 10) / 10;
      }
      this.drugimg = 'assets/depon_siropi.png';
      this.substance = 'Παρακεταμόλη';
      this.usage = 'Το φάρμακο αυτό μπορεί να δίνεται μέχρι 4 με 5 φορές την μέρα (όχι συντομότερα από 4 με 6 ώρες)';
    } else if (this.drugsel === 'Algofren') {
      if (this.weight === null || this.weight === 0) {
        this.dosage = 0;
      } else {
      this.dosage = Math.round((this.weight / 3 + 0.5) * 10) / 10;
      }
      this.drugimg = 'assets/algofren_syrup_gr.png';
      this.substance = 'Ιβουπροφαίνη';
      this.usage = 'Το φάρμακο αυτό μπορεί να δίνεται μέχρι 3 με 4 φορές την μέρα (όχι συντομότερα από 6 με 8 ώρες)';
    } else if (this.drugsel === 'Apotel') {
      if (this.weight === null || this.weight === 0) {
        this.dosage = 0;
      } else {
      this.dosage = Math.round((this.weight / 2 + 1) * 10) / 10;
      }
      this.drugimg = 'assets/large_Apotel_Syrup.png';
      this.substance = 'Παρακεταμόλη';
      this.usage = 'Το φάρμακο αυτό μπορεί να δίνεται μέχρι 4 με 5 φορές την μέρα (όχι συντομότερα από 4 με 6 ώρες)';
    } else if (this.drugsel === 'Augmentin 457') {
      if (this.weight === null || this.weight === 0) {
        this.dosage = 0;
      } else {
      this.dosage = Math.round((this.weight / 4) * 1.12 * 10) / 10;
      }
      this.drugimg = 'assets/augmentin.png';
      this.substance = 'Amoxicillin trihydrate';
      this.usage = 'Το φάρμακο αυτό πρέπει να δίνεται 2 φορές την ημέρα σε σταθερή βάση, κάθε 12 ώρες';
    }
    this.disable = false;
  }
}
