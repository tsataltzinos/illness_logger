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
  currentFeed: any = {};
  items: Item[] = [];
  children: ChildItem[] = [];
  newItem: Item = <Item>{};
  newChild: ChildItem = <ChildItem>{};

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

}
