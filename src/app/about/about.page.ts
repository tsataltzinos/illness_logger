import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }
  
  async presentdeveloper() {
    const alert = await this.alertController.create({
      header: 'Developer',
      subHeader: 'Tsataltzinos Haris',
      message: 'Contact: tsataltzinos@gmail.com',
      buttons: ['OK']
    });

    await alert.present();
  }

  showdeveloper() {
    this.presentdeveloper();
  }


  async presentdoctor() {
    const alert = await this.alertController.create({
      header: 'Doctor',
      subHeader: 'Tzelepis Kleanthis',
      message: 'Contact: kleatzel@yahoo.gr',
      buttons: ['OK']
    });

    await alert.present();
  }

  showdoctor() {
    this.presentdoctor();
  }


  async presentartist() {
    const alert = await this.alertController.create({
      header: 'Artist',
      subHeader: 'Chiali Despoina',
      message: 'Contact: chgdespoina@gmail.com',
      buttons: ['OK']
    });

    await alert.present();
  }

  showartist() {
    this.presentartist();
  }

}
