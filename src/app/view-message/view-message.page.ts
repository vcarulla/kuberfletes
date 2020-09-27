import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Order } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public order: any;
  public selOrder: Order;
  public state: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private http: HttpClient
  ) { }

  public baseURL: string = 'https://kuberfletes-290720.uc.r.appspot.com';
  

  ngOnInit() {
    this.storage.get('orders').then((val) => {
      console.log('orders:', val);
      this.order = val;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('id', id)

    this.order.forEach(element => {
          if(element.id == id) {
            this.selOrder = element
            console.log('order', this.selOrder);
          }
      });
    });

    this.getState();
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }


  public async PostState(value) {
    console.log('state', value)
    const body = {}
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseURL}/orders/status/${this.selOrder.order_code} `, { status_code: 'bb' })
      .subscribe(data => {
        resolve(
          console.log(data)
        )
      }, err =>{
        reject(
          console.log(err)
        )
      });
    });
  }


  getState(){
    this.http.get(`${this.baseURL}/state`).subscribe( data => {
      this.state = data;
      console.log('state', this.state);
    })
  }



  PostSms() {
    const body = {}
    this.http.post(`${this.baseURL}/notifications/sms/${this.selOrder.order_code} `, { body })
    .subscribe(data => {
      console.log(data )
    });
  }

  PostTrack() {
    const body = {}
    this.http.post(`${this.baseURL}/orders/track/${this.selOrder.order_code} `, { body })
    .subscribe(data => {
      console.log(data )
    });
  }

}
