import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdentifaktionService } from '../webService/user-identifaktion.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errormsg:string;
  constructor(private menu: MenuController,private router: Router, private userIdentService: UserIdentifaktionService) { 
    this.menu.enable(false,'main-menu');
  }

  ngOnInit() {
  }
  tryToLogin(email: string, password: string): void {
    this.userIdentService.isLogin(email,password).subscribe(response=>{
        if(response.login){
          console.log(response.token)
          localStorage.setItem("token",response.token);
          this.errormsg="";
          this.router.navigate(['home']);
        }else{
          this.errormsg="Error: Falscher Benutzernamen oder Passwort";
        }
    });

  }
}
