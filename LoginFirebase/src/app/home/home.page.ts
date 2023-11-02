import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth,signOut } from '@angular/fire/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor
  (

    private router:Router,
    private authservice: AuthService
  ) {}


  goToAgregarItem() {
   this.router.navigateByUrl('agregar-item');
   console.log("funciono")
  }
  logout () {
    this.authservice.logout();
    this.router.navigateByUrl('registro')
  }
}


