import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Order {
  client_id: number,
  id: number,
  lat: string,
  log: string,
  order_code: string,
  order_details: string,
  seller_id: string,
  shipping_datetime: string,
  status: number,
  status_code: string,
  tag: string,
  trak_id: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public order: Order;

/*   public getOrders() {
    this.http.get('https://run.mocky.io/v3/57f560ec-43b1-42ad-a3d5-56d5ca0dbde7')
    .subscribe(data => {
      console.log('xxx', data)
      return data
    })
  } */

/*   // TODO Mandar todo a un srv
  getStatusList() {
    this.http.get(`${this.url}/state`)
    .subscribe(data => {
      console.info(data);
      this.orders = data;
    })
  }

  getOrdersTrue(sellerId: string) {
    // TODO borrar esta porqueria

    this.http.get(`${this.url}/orders/:${sellerId}`)
    .subscribe(data => {
      console.info(data);
      this.orders = data;
    })
  }

  postStatus() {
    let order_code = '';
    let status = '';

    this.http.post(`${this.url}/orders/:${order_code}`, { "status_code": `${status}` })
    .subscribe(data => {
      console.info(data);
      this.orders = data;
    })
  } */

  public getOrderbyId(id: number): Order {
    return this.order[id];
  }
}
