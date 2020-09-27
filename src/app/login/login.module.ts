import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module'
import { HomePageModule } from '../home/home.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    HomePageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
