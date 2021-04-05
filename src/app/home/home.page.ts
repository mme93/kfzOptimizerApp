import { Component } from '@angular/core';
import { UserIdentifaktionService } from '../webService/user-identifaktion.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router, private userIdentService: UserIdentifaktionService) { }

  tryToLogin(email: string, password: string): void {
    this.userIdentService.checkLogin(email, password).then(response => {
      if (response.login) {
        this.router.navigate(['login']);
      }
    });

  }


}