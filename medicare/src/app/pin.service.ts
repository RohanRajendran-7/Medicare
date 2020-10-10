import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pin } from './pin';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  public pin:string;
  public url:string;
  constructor(public http:HttpClient) { 
    this.url = "http://localhost:8090/pincode/"
  }

  public verify(pin:string):Observable<string>{
    return this.http.get<string>(this.url+pin);
  }
  public add(pin:Pin):Observable<any>{
    return this.http.post<string>(this.url+'add',pin);
  }
  public find():Observable<Pin[]>{
    return this.http.get<Pin[]>(this.url+"all")
  }
}
