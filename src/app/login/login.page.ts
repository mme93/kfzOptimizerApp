import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdentifaktionService } from '../webService/user-identifaktion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userIdentService: UserIdentifaktionService) { }

  ngOnInit() {
  }
  tryToLogin(email: string, password: string): void {
    this.userIdentService.isLogin(email,password).subscribe(response=>{
        if(response.login){
          console.log(response.token)
          localStorage.setItem("token",response.token);
          this.router.navigate(['home']);
        }
    });

  }
}
