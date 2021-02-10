import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LiderFormPage } from './lider-form/lider-form/lider-form.page';


@Component({
  selector: 'app-lider',
  templateUrl: './lider.page.html',
  styleUrls: ['./lider.page.scss'],
})
export class LiderPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LiderFormPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

