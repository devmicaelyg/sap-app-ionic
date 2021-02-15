import { HeaderPageModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoPageRoutingModule } from './projeto-routing.module';

import { ProjetoFormPage } from './projeto-form/projeto-form.page';
import { ProjetoPage } from './projeto-list/projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProjetoPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [ProjetoPage, ProjetoFormPage]
})
export class ProjetoPageModule {}
