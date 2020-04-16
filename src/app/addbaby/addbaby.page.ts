import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item, ChildItem } from '../storage.service';

@Component({
  selector: 'app-addbaby',
  templateUrl: './addbaby.page.html',
  styleUrls: ['./addbaby.page.scss'],
})
export class AddbabyPage implements OnInit {

  birthdate: string = new Date().toISOString();
  child: string;
  weight: number = 10;
  currentFeed: any = {};
  items: Item[] = [];
  children: ChildItem[] = [];
  newItem: Item = <Item>{};
  newChild: ChildItem = <ChildItem>{};
  drugsel = '';
  dosage: number;
  usage: string;
  kgs: number = 10;
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
  
      //this.child = this.currentFeed;
    }

  ngOnInit() {
  }

  cancel() {
    this.navCtrl.back();
  }

  addbaby() {
    this.newChild.id = Date.now();
    this.newChild.name = this.child;
    this.newChild.birthdate = this.birthdate;
    this.newChild.weight = this.weight;

    this.storageService.addChild(this.newChild).then(childitem => {
      this.newChild = <ChildItem>{};
      this.loadChildren();
    })

    console.log(this.newChild);
    this.navCtrl.back();
  }

  loadChildren() {
    this.storageService.getChildren().then(children => {
      this.children = children;
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

  refreshkgs() {
    this.weight = Math.round(this.kgs * 10) / 10;
  }

}
