import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiscDataService } from '../misc-data.service';
import { Storage } from '@ionic/storage';
import { StorageService, Item, ChildItem } from '../storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  babysel: string;
  items: Item[] = [];
  children: ChildItem[] = [];
  newItem: Item = <Item>{};
  itemid: number;
  temperature: string;
  name: string;

  constructor(private router: Router, private miscDataService: MiscDataService, 
              private storage: Storage, private storageService: StorageService, 
              private toastctrl: ToastController) { 
                
  }

  ngOnInit() {
    this.loadItemsperchild();
    this.loadChildren();
  }

  ionViewDidEnter() {
    this.loadItemsperchild();
    this.loadChildren();
  }

  gotoaddtemp(babysel) {
    this.miscDataService.setcurrentfeed(babysel);
    if (this.miscDataService.currentFeed){
      this.router.navigate(['/addtemp']);
    } else {
      this.presentToast();
    }
  }


  gotoadddrug(babysel) {
    this.miscDataService.setcurrentfeed(babysel);
    if (this.miscDataService.currentFeed){
      this.router.navigate(['/adddrug']);
    } else {
      this.presentToast();
    }
  }

  presentToast() {
    this.toastctrl.create({
      message: 'Παρακαλώ επιλέξτε κάποιο παιδί. Αν δεν θυπάρχει προσθέστε ένα στη λίστα παιδιών!',
      duration: 3000
    }).then((toast) => {
      toast.present();
    });
  }

  refreshhistory() {

  }

  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  loadChildren() {
    this.storageService.getChildren().then(children => {
      this.children = children;
    });
  }


  loadItemsperchild() {
    console.log(this.babysel);
    this.storageService.getItems().then(items => {
      this.items = items.filter((measures) => {
        return measures.name === this.babysel;
      }).sort((a, b) => {
        return <any>new Date(b.modified) - <any>new Date(a.modified);
      });
    });
  }

  gotoupdatepage(itemid, temperature) {
    this.miscDataService.setcurrentfeed(itemid);
    //this.loadcorrectpage(this.itemid);
    
    this.storageService.getItems().then(items => {
      this.items = items.filter((measures) => {
        return measures.id === this.miscDataService.currentFeed;
      });
      this.name = this.items[0].name;
      this.temperature = this.items[0].tmp;
      this.itemid = this.items[0].id;
    });

    this.miscDataService.setcurrentfeed(temperature);
    if (parseFloat(this.miscDataService.currentFeed).toString() !== this.miscDataService.currentFeed) {
      this.router.navigate(['/updatedrug']);
    } else {
      this.router.navigate(['/updatetemp']);
    }
    this.miscDataService.setcurrentfeed(itemid);
    //console.log(this.temperature);
  }

  loadcorrectpage(child: number) {
    this.storageService.getItems().then(items => {
      this.items = items.filter((measures) => {
        return measures.id === this.miscDataService.currentFeed;
      });
      this.name = this.items[0].name;
      this.temperature = this.items[0].tmp;
      this.itemid = this.items[0].id;
      //console.log(this.child);
    });
  }

  del(child: number) {
    //this.loadcorrectpage(this.itemid);
    
    this.storageService.getItems().then(items => {
      this.items = items.filter((measures) => {
        return measures.id === this.miscDataService.currentFeed;
      });
      this.name = this.items[0].name;
      this.temperature = this.items[0].tmp;
      this.itemid = this.items[0].id;
    });


    this.storageService.deleteItem(this.itemid).then(item => {
      console.log('Item removed');
    });
    this.loadItemsperchild();
  }
}
