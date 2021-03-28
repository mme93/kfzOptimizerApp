import { Component } from '@angular/core';
import {DatabaseService}from '../database.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private database:DatabaseService,private router:Router) {}

  tryToLogin(email:string,password:string):void{
    if(this.database.postLogin(email,password)){
      this.router.navigate(['login']);
    }
   
  }

}
