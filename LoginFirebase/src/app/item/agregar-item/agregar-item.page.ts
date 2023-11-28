import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgregarItemService } from '../agregar-item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.page.html',
  styleUrls: ['./agregar-item.page.scss'],
})
export class AgregarItemPage implements OnInit {

  item !: FormGroup;

  constructor(
    private router : Router,
    private agregarItem : AgregarItemService,
    private formBuilder : FormBuilder,
  ) { }

  get nombre () {return this.item.get ('nombre');}
  get descripcion () {return this.item.get ('descripcion');}
  get precio () {return this.item.get ('precio');}

  ngOnInit() {
    this.item = this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      precio: ['', Validators.required,]
    })
    }

    AgregarItem() {
      const path = 'items';
    
      try {
        this.agregarItem.addCosa(this.item.value, path);
        this.router.navigateByUrl('home'); // Redirect to "home" after adding the item
      } catch (e) {
        console.log("Error");
        console.log(e);
      }
    }
    goHome() {
      this.router.navigateByUrl('home');
    }
  
  }

