import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { LoginService } from '../login.service';
import { User } from '../user';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public showModal: boolean;
  public email:string;
  public password:string;
  public userobj:User;
  public adminobj:Admin;
  public registerForm: FormGroup;
  public loginobj:User;
  public adminloginobj:Admin;
  public submitted = false;
  constructor(public formBuilder: FormBuilder,public adminservice:AdminService,public router:Router,public loginservice:LoginService) { 
    this.userobj = new User();
    this.adminobj = new Admin();
  }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  public signup():void{
    this.router.navigate(['/signup']);
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(1)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    this.userobj.email = this.email;
    this.userobj.password = this.password;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.loginservice.login(this.userobj).subscribe(res=>{
        this.loginobj = res;
      })
      if(this.loginobj != null){
        this.loginservice.setaddress(this.loginobj.address);
        this.loginservice.setLoggedIn(true);
        this.router.navigate(['/checkout'])
      }
      else if(this.loginobj == null){
        this.adminobj.email = this.email;
        this.adminobj.password = this.password;
        this.adminservice.adminLogin(this.adminobj).subscribe(res=>{
          this.adminloginobj = res;
        })
      }
      if(this.adminloginobj == null){
        return;
      }
      else{
        this.loginservice.setLoggedIn(true);
        this.router.navigate(['/admin']);
      }
    }   
}
}
