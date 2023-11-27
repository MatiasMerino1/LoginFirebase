import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  items !: any;

  updateForm !: FormGroup;

  constructor(private itemService : ItemService,
    private router : Router,
    private formBuilder : FormBuilder,) { }

    get nombre () {return this.items.get('name');}
    get descripcion () {return this.items.get('description');}
    get precio () {return this.items.get('description');}


  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      descripcion:['',[Validators.required,Validators.maxLength(100)]],
      precio:['',[Validators.required,Validators.maxLength(100)]]
    });
  }
  updateItem () {
    this.itemService.updateItem(this.items.id, this.updateForm.value);
    this.router.navigateByUrl('home')
  }

  goHome() {
    this.router.navigateByUrl('home')
  }

}
