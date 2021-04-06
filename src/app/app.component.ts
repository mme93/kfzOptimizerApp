import { Component } from '@angular/core';
import { UserIdentifaktionService } from './webService/user-identifaktion.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router:Router,private userIdentService: UserIdentifaktionService) {}
  stringToken:string;
  logOut():void{
    this.stringToken=localStorage.getItem("token");
    localStorage.removeItem("token");
    this.userIdentService.logOut(this.stringToken);
    this.menu.enable(false,'main-menu');
    this.router.navigate(['/login']);
  }  
  goToAuftraege(){
    this.router.navigate(['/auftraege']);
  }
}
