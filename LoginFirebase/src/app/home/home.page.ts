import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
   this.router.navigateByUrl('item/agregar-item');
   console.log("funciono")
  }

  logout () {
    this.authservice.logout();
  }

  goUsuario() {
    this.router.navigateByUrl('perfil-usuario')
  }

  goItems() {
    this.router.navigateByUrl('item')
  }
}


