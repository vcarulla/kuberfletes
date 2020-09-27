import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Order } from '../services/data.service';
import { Storage } from '@ionic/storage';
import { element } from 'protractor';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public order: any;
  public selOrder: Order;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private storage: Storage
  ) { }

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

/*       for (let i = 0; i < this.order.length; i++) {
        if (i == this.order[i].id) {
          this.selOrder = this.order[i];
          console.log('order', this.selOrder);
        }
      } */

    });
  };

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
