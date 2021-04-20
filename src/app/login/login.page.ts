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

    this.userIdentService.tryLogin(email,password).subscribe(response=>{
      console.log(response.jwtToken)
        if(response.jwtToken!="Bad credentials"){
          console.log(response.jwtToken)
          localStorage.setItem("token",response.jwtToken);
          this.errormsg="";
          this.router.navigate(['home']);
        }else{
          this.errormsg="Error: Falscher Benutzernamen oder Passwort";
        }
    });

   


  }
  
}
