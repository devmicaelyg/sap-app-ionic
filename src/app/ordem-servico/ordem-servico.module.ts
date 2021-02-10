import { HeaderPageModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdemServicoPageRoutingModule } from './ordem-servico-routing.module';

import { OrdemServicoPage } from './ordem-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemServicoPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [OrdemServicoPage]
})
export class OrdemServicoPageModule {}
