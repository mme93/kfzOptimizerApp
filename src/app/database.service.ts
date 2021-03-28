import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  postLogin(email:string,password:string):boolean{
    console.log(email);
    console.log(password);
    return true;
  }
}
