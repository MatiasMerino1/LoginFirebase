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
    private formBuilder : FormBuilder,

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

  get age() {
    return this.credentials.get('age')
  }

  get cellphone() {
    return this.credentials.get('cellphone')
  }
  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required]],
      age: ['',[Validators.required, Validators.min(19), ]],
      cellphone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
    })
  }


  async register () {
    console.log(this.credentials.value);

    const user = await this.authService.register(this.credentials.value);
    if (user) {
      console.log("OK");
      this.router.navigateByUrl("/login");
    } else {
      console.log("NOT OK")
    }
  }

  async login () {
    console.log(this.credentials.value);

    const user = await this.authService.login(this.credentials.value);

    if (user) {
      console.log("OK");
      this.router.navigateByUrl('home');
    } else {
      console.log("NOT OK")
    }
  }

  goToHome (){
    this.router.navigateByUrl('home');
  }

  addUsuario() {
    const path = 'usuarios'
    try {
      this.authService.agregarUsuario(
        this.credentials.value,
        path
      )
    } catch(e){
      console.log("Error");
      console.log(e);
    }
  }

}
