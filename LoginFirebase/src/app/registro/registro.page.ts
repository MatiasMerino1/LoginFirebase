import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  credentials !: FormGroup;

  constructor(
    private authService : AuthService,
    private router : Router,

  ) { }

  get email() {
    return this.credentials.get('email');
  }

  get password ()
  {
    return this.credentials.get('password');
  }

  get username () {
    return this.credentials.get('username')
  }

  get cellphone() {
    return this.credentials.get('cellphone')
  }
  ngOnInit() {
    this.credentials = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      username: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
    })
  }

  async registrarUsuario() {
    try {
        const user = await this.authService.register(this.credentials.value);
        if (user) {
            console.log("Usuario registrado exitosamente");
            await this.authService.agregarUsuario(
                this.credentials.value,
                "usuarios"
            );
            this.router.navigateByUrl("/home");
            console.log("Funciono")
        } else {
            console.log("Error al registrar el usuario");
        }
    } catch (e) {
        console.error("Error durante el registro del usuario:", e);
    }
}

goLogin()
{
  this.router.navigateByUrl('login')
}
}
