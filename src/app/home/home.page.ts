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
      this.email = val;
    });
  }

  ionViewDidEnter() {
    this.getOrders();
    //this.getStates()
  }

  getOrders() {
    this.http.get(`https://kuberfletes-290720.uc.r.appspot.com/orders/${this.email}`)
    .subscribe(data => {
      this.orders = data;
      this.storage.set('orders', this.orders);
    });
  }
  
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  } 

}
