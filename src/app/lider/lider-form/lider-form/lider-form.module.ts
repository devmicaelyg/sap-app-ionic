import { HeaderPageModule } from './../../../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiderFormPageRoutingModule } from './lider-form-routing.module';

import { LiderFormPage } from './lider-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiderFormPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [LiderFormPage]
})
export class LiderFormPageModule {}
