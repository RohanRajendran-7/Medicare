import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import * as $ from 'jquery';import { Admin } from '../admin';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  public admin:Admin;
  constructor(public router:Router, public service:AdminService) {
    this.admin = new Admin();
   }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  public addAdmin():void{
    this.service.addAdmin(this.admin).subscribe(res=>{
      this.admin = new Admin();
      this.router.navigate(['admin'])
    })
  }

}
