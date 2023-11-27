import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private formBuilder : FormBuilder,
  ) { }

  get email () {return this.credentials.get('email');}
  get password () {return this.credentials.get('password');}
  get username () {return this.credentials.get('username');}
  get cellphone () {return this.credentials.get('cellphone');}

  ngOnInit() {
    this.perfilservice.getAllUsuarios().then( res => {
      this.credentials = res;
      console.log(this.credentials);
    });
  }
  goUpdateUsuario(){
    this.router.navigateByUrl('update-usuario')
  }

  goHome() {
    this.router.navigateByUrl('home')
  }
}
