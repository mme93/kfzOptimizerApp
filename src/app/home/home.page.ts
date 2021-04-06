import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdentifaktionService } from '../webService/user-identifaktion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private router:Router,private userIdentService: UserIdentifaktionService) { }
  logOut():void{
    const toke=localStorage.getItem("token");
    localStorage.removeItem("token");
    //this.userIdentService.logOut(stringify(toke));
    //this.router.navigate(['/login']);
  }  

}