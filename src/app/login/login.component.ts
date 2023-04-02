import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/**
* @title login demo
*/
@Component({
selector: 'app-login',
styleUrls: ['login.component.css'],
templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit{
  constructor(private router: Router){}
ngOnInit(): void {
 
}
username : string ="";
password : string ="";
show: boolean= false;
submit(){
  if(this.username=='admin' && this.password == 'admin'){
  this.router.navigate(["home-page"]);
  }
  else if(this.username=='hari' && this.password == 'hari'){
    this.router.navigate(["home-page"]);
    }
  else{
    alert("invalid credentials");
  }
}}