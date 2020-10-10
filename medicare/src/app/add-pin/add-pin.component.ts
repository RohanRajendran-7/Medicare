import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Pin } from '../pin';
import { PinService } from '../pin.service';
@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.css']
})
export class AddPinComponent implements OnInit {

  public temp:Pin;
  public toggle:boolean;
  public pinList:Pin[];
  constructor(public http:HttpClient, public service:PinService) { 
    this.temp = new Pin();
  }

    ngOnInit() {
      this.service.find().subscribe(res=>{
        this.pinList=res;
      })
      this.toggle = false;
      $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
  }

  public add():void{
    this.service.add(this.temp).subscribe(res=>{
      this.temp = new Pin();
    })
  }
  public add1():void{
    this.toggle = false;
  }
  public fetch():void{
    this.toggle = true;
    this.service.find().subscribe(res=>{
      this.pinList=res;
    })
  }
}
