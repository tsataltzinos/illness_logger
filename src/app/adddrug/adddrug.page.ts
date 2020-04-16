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
    this.refreshcard()
    console.log(this.dosage + 'ml');
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
