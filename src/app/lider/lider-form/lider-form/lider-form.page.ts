import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LiderPage } from '../../lider.page';

@Component({
  selector: 'app-lider-form',
  templateUrl: './lider-form.page.html',
  styleUrls: ['./lider-form.page.scss'],
})
export class LiderFormPage implements OnInit {

  constructor( public modalController: ModalController ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LiderPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

