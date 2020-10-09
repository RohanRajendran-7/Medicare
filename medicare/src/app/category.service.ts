import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string;
  constructor(public http:HttpClient) { 
    this.url = "http://localhost:8090"
  }

  public getAllFiltered(category:string):Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url+'/medicines/filter/'+category);
  }
  public getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.url+'/admin/categories');
  }

}
