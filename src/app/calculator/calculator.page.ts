import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  drugsel = '';
  weight: number = 10;
  dosage: number;
  usage: string;
  kgs: number = 10;
  baby = 'assets/dose.png';
  drugimg = '';
  disable = true;
  substance: string;

  constructor() { }

  ngOnInit() {
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
