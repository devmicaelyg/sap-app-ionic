import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsFormPageRoutingModule } from './os-form-routing.module';

import { OsFormPage } from './os-form.page';
import { HeaderPageModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsFormPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [OsFormPage]
})
export class OsFormPageModule {}
