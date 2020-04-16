import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item, ChildItem } from '../storage.service';

@Component({
  selector: 'app-updatebaby',
  templateUrl: './updatebaby.page.html',
  styleUrls: ['./updatebaby.page.scss'],
})
export class UpdatebabyPage implements OnInit {

  babyid: number;
  items: ChildItem[] = [];
  child: string;
  birthdate: string = new Date().toISOString();
  weight: number = 10;  drugsel = '';
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
    this.babyid = this.miscDataService.currentFeed;
    this.loadchild(this.babyid);
  }

  cancel() {
    this.navCtrl.back();
  }

  loadchild(child: number) {
    console.log(this.babyid);
    this.storageService.getChildren().then(items => {
      this.items = items.filter((measures) => {
        return measures.id === this.miscDataService.currentFeed;
      });
      this.child = this.items[0].name;
      this.birthdate = this.items[0].birthdate;
      this.babyid = this.items[0].id;
      this.weight = this.items[0].weight;
      this.kgs = this.weight;
      //console.log(this.child);
    });
  }

  updatebaby(child: ChildItem = <ChildItem>{}) {
    //console.log(this.babyid);
    child.id = this.babyid;
    child.name = this.child;
    child.birthdate = this.birthdate;
    child.weight = this.weight;
    //console.log(child.id);

    this.storageService.updateChildItem(child).then(item => {
      console.log('Item updated');
    });
    this.navCtrl.back();
  }

  delbaby(child: ChildItem = <ChildItem>{}) {
    //child.id = this.babyid;
    this.storageService.deleteChild(this.babyid).then(child => {
      console.log('Item removed');
    });
    this.navCtrl.back();
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
