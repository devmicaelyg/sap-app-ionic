import { HeaderPageModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiderPageRoutingModule } from './lider-routing.module';

import { LiderPage } from './lider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiderPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [LiderPage]
})
export class LiderPageModule {}
