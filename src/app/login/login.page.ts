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
    this.userIdentService.checkLogin(email, password).then(response => {
      if (response.login) {
        this.router.navigate(['home']);
      }
    });

  }
}
