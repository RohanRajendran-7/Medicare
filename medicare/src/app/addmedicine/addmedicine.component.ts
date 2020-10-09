import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Medicine } from '../medicine';
import * as $ from 'jquery';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {

  public medicine:Medicine;
  public categoryList:Category[];
  constructor(public router:Router,public categoryservice:CategoryService,private service:AdminService) {
    this.medicine = new Medicine();
   }

  ngOnInit() {
    this.categoryservice.getAllCategories().subscribe(res=>{
      this.categoryList = res;
    })
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  public addmedicine():void{
    this.service.addMedicine(this.medicine).subscribe(res=>{
      this.medicine = new Medicine();
      this.router.navigate(['admin/medicines']);
    })
  }

}
