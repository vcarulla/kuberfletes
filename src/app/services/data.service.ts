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

  public getOrderbyId(id: number): Order {
    return this.order[id];
  }
}
