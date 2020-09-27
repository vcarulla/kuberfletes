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
  email: string = ''

  ngOnInit() {
    this.storage.get('email').then((val) => {
      console.log('email:', val);
    });
    this.getOrders(this.email);
  }

  getOrders(email: string) {
    this.http.get('https://run.mocky.io/v3/57f560ec-43b1-42ad-a3d5-56d5ca0dbde7')
    .subscribe(data => {
      this.orders = [
        {
        "code": "#aaa123",
        "status": "Completed"
        },
        {
        "code": "#bbbb123",
        "status": "Awaiting"
        },
        {
        "code": "#ccccc2345",
        "status": "Crash"
        },
        {
        "code": "#dddd123",
        "status": "Completed"
        },
        {
        "code": "#ddwef123",
        "status": "Completed"
        },
        {
          "code": "#bbbb123",
          "status": "Awaiting"
          },
          {
          "code": "#ccccc2345",
          "status": "Crash"
          },
          {
          "code": "#dddd123",
          "status": "Completed"
          },
          {
          "code": "#ddwef123",
          "status": "Completed"
          }
        ];
      console.log(this.orders);
    })
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  } 

}
