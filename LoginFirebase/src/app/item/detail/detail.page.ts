import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  items !: any;
  updateForm!: any;


  constructor(private itemService : ItemService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private formBuilder : FormBuilder,) { }

    get nombre () {return this.items.get('name');}
    get descripcion () {return this.items.get('description');}
    get precio () {return this.items.get('description');}

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        const itemId = paramMap.get('itemId');
        this.items = this.itemService.getItem(itemId as string);
      }),
      this.updateForm = this.formBuilder.group({
        nombre:['',[Validators.required,Validators.minLength(3)]],
        descripcion:['',[Validators.required,Validators.maxLength(100)]],
        precio:['',[Validators.required,Validators.maxLength(100)]]
      });
    }
    goItems(){
      this.router.navigateByUrl('item')
    }
    goHome() {
      this.router.navigateByUrl('home')
    }

    deleteItem () {
      this.itemService.deleteItem(this.items.id);
      this.router.navigateByUrl('home')
    }

    updateItem () {
      this.itemService.updateItem(this.items.id, this.updateForm.value);
      this.router.navigateByUrl('home')
    }
    
    goUpdate(){
      this.router.navigateByUrl('item/update-item')
    }
}
