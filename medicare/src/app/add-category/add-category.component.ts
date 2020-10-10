import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Category } from '../category';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public category:Category;
  constructor(public service:AdminService) { 
    this.category = new Category();
  }

  ngOnInit() {
    this.category = new Category();
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  public addCategory():void{
    this.service.addCategory(this.category).subscribe(res=>{
      this.category = new Category();
    })
  }

}
