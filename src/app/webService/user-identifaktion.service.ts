import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs'
import { LoginPageRoutingModule } from '../login/login-routing.module';

@Injectable({
  providedIn: 'root'
})
export class UserIdentifaktionService {
 

  constructor(private http: HttpClient) {
   
   }
  tryLogin(email:string,password:string):Observable<LoginToken>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }   
   return this.http.post<LoginToken>('https://kfzoptimizerservice.herokuapp.com/authenticate', JSON.stringify(new UserLogin(email,password)),httpOptions);
  }
  
  logOut(token:string){
    localStorage.removeItem(token);
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

class LoginToken{
  jwtToken:string;
  constructor( jwtToken:string){
    this.jwtToken=jwtToken;
    }
}