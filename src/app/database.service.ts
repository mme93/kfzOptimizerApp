import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  configUrl = 'assets/login.json';
  loginForm:LoginForm = new LoginForm("Markus");
//https://kfzoptimizerservice.herokuapp.com/date
  constructor(private http: HttpClient) {
   
   }


  test():void{
    
    this.http.get<String>('http://localhost:8080/t').subscribe(data => {
    console.log(data);
  }, err=>{
    console.log(err);
  });
}
postLogin():void{
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  this.http.post('http://localhost:8080/login',JSON.stringify(this.loginForm),httpOptions).subscribe(data => {
    console.log(data);
  }, err=>{
    console.log(err);
  });
}

}
class LoginForm{
  user:string
  constructor(user:string){
    this.user=user;
  }
}
