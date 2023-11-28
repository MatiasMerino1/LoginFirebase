import { Component, OnInit } from '@angular/core';
import {FormGroup,} from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  credentials!: any;

  updateForm !: FormGroup;

  constructor(
    private router : Router,
    private perfilservice : PerfilService,
  ) { }
  ngOnInit() {
    this.perfilservice.getAllUsuarios().then( res => {
      this.credentials = res;
      console.log(this.credentials);
    });
  }

  updateUsuario () {
    this.perfilservice.updateUsuario(this.credentials.id, this.updateForm.value);
    this.router.navigateByUrl('home')
  }

  goHome() {
    this.router.navigateByUrl('home')
  }
}
