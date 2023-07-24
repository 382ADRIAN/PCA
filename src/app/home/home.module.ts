import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import{HttpClientModule}from'@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}