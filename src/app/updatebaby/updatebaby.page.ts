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
      //console.log(this.child);
    });
  }

  updatebaby(child: ChildItem = <ChildItem>{}) {
    //console.log(this.babyid);
    child.id = this.babyid;
    child.name = this.child;
    child.birthdate = this.birthdate;
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

}
