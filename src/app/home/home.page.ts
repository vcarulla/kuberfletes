import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private http: HttpClient,
    private storage: Storage) {}

  orders: any = ''
  public email: string = ''

  ngOnInit() {
    this.storage.get('email').then((val) => {
      console.log('email:', val);
    });
  }

  ionViewDidEnter() {
    this.getOrders();
    //this.getStates()
  }

  getOrders() {
    console.log('sss', this.email)
    this.http.get(`https://kuberfletes-290720.uc.r.appspot.com/orders/gustavoghioldi@gmail.com`)
    .subscribe(data => {
      this.orders = data;
      this.storage.set('orders', this.orders);
      console.log(this.orders )
    });
  }

  getStates() {
    console.log('sss', this.email)
    this.http.get(`https://kuberfletes-290720.uc.r.appspot.com//state`)
    .subscribe(data => {
      console.log(data )
    });
  }


  
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  } 

}
