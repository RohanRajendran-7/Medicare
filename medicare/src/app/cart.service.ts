import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public url:string;
  constructor(public http:HttpClient) { 
    this.url="http://localhost:8090/cart/"
  }

  public getCart(id:number):Observable<Cart[]>{
    return this.http.get<Cart[]>(this.url+id);
  }

  public getCartCount():Observable<number>{
    return this.http.get<number>(this.url+'count');
  }

  public add(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.url+'add',cart);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<number>(this.url+'delete/'+id);
  }

  public getCategory():Observable<string[]>{
    return this.http.get<string[]>(this.url+'/category');
  }

}
