import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public url:string;
  constructor(public http:HttpClient) { 
    this.url = "http://localhost/orders"
  }

  public addOrder(order:Orders):Observable<Orders>{
    console.log("hekll")
    return this.http.post<Orders>(this.url+'/add',order);
  }
}
