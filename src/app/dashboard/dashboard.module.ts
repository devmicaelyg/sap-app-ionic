import { HeaderPageModule } from './../components/header/header.module';
import { HeaderPage } from './../components/header/header.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
