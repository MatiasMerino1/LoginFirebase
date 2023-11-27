import { Component, OnInit } from '@angular/core';
import { AgregarItemService } from './agregar-item.service';
import { Router } from '@angular/router';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items!: any;

  constructor(private ItemService:ItemService, private router:Router) { }

  get nombre () {return this.items.get('name');}
  get descripcion () {return this.items.get('description');}
  get precio () {return this.items.get('description');}


  ngOnInit() {
    this.ItemService.getAllItems().then( res => {
      this.items = res;
      console.log(this.items);
    });
  }

  goTo (path:string){
    this.router.navigateByUrl('item/detail/'+path);
  }

  goHome() {
    this.router.navigateByUrl('home')
  }
}
