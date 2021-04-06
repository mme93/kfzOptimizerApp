import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { LoginPageRoutingModule } from '../login/login-routing.module';

@Injectable({
  providedIn: 'root'
})
export class UserIdentifaktionService {
 

  constructor(private http: HttpClient) {
   
   }

  isLogin(emaiL:string,password:string):Observable<LoginToken> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<LoginToken>('https://kfzoptimizerservice.herokuapp.com/userIdentifaktion', JSON.stringify(new UserLogin(emaiL,password)),httpOptions); 
  }
  logOut(toke:string){

  }
}
  


class UserLogin{
  email:string;
  password:string;
  constructor(email:string,password:string){
    this.email=email;
    this.password=password;
  }
}
class LoginToken{
  token:string;
  login:boolean;
  email:string;
  constructor( token:string,login:boolean,email:string){
    this.token=token;
    this.email=email;
    this.login=login;
    }
}