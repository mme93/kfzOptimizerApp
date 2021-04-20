import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private menu: MenuController,private router:Router,private http: HttpClient) { 
    this.menu.enable(true,'main-menu');
  }
  /*
  testme(){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post<LoginToken>('https://xsxsp.herokuapp.com/authenticate', JSON.stringify(new UserLogin("Markus","123")),httpOptions).subscribe(response=>console.log(response.jwtToken)); 
  }

  testme(){
  
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYXJrdXMiLCJleHAiOjE2MTg0MjkyMjMsImlhdCI6MTYxODQxMTIyM30.cXbH5-A18wzgzEcHB4wlHAW_i6uAfdouFma8eFT5-cvri9BM5Z45rQXx74PiYx5S2G3xZOvEIk39SVDtMtgyKA'})
    }
    this.http.get<LoginToken>('http://localhost:8083/day',httpOptions).subscribe(response=>console.log(response.jwtToken));
  }
    */

  testme(){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post<LoginToken>('http://localhost:8083/authenticate', JSON.stringify(new UserLogin("Markus","123")),httpOptions).subscribe(response=>console.log(response.jwtToken)); 
  }
  
}
  
class LoginToken{
  jwtToken:string;
  constructor( jwtToken:string){
    this.jwtToken=jwtToken;
    }
}
class UserLogin{
  username:string;
  password:string;
  constructor(username:string,password:string){
    this.username=username;
    this.password=password;
  }
}