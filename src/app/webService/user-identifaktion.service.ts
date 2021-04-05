import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserIdentifaktionService {
 

  constructor(private http: HttpClient) {
   
   }

   checkLogin(emaiL:string,password:string):Promise<AnswerUserLogin> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return new Promise((resolve, reject) => {
      this.http.post<AnswerUserLogin>('http://localhost:8080/date', JSON.stringify(new UserLogin(emaiL,password)),httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });;
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
class AnswerUserLogin{
  email:string;
  password:string;
  login:boolean;
  constructor(email:string,password:string,login:boolean){
    this.email=email;
    this.password=password;
    this.login=login;
  }
}

