import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PerfilService } from '../perfil.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.page.html',
  styleUrls: ['./update-usuario.page.scss'],
})
export class UpdateUsuarioPage implements OnInit {

  credentials!: any;
  updateForm !: FormGroup;
  constructor(
    private authService: AuthService,
    private perfilService:PerfilService,
    private formBuilder : FormBuilder,
    private router: Router
  ) { }

  get email () {return this.credentials.get('email');}
  get password () {return this.credentials.get('password');}
  get username () {return this.credentials.get('username');}
  get cellphone () {return this.credentials.get('cellphone');}

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.maxLength(100)]],
      username:['',[Validators.required,Validators.maxLength(100)]],
      cellphone:['',[Validators.required,Validators.maxLength(100)]]
    });
  }
  updateUsuario () {
    this.perfilService.updateUsuario(this.credentials.id, this.updateForm.value);
  }

  goHome(){
    this.router.navigateByUrl('home')
  }
}
