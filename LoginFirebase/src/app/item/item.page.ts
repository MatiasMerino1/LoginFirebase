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

  items!: any[];
  filteredItems!: any[];
  searchTerm: string = '';

  constructor(private ItemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.ItemService.getAllItems().then(res => {
      this.items = res;
      this.filteredItems = this.items;
    });
  }

  filterItems(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => {
      return item.nombre.toLowerCase().includes(this.searchTerm) ||
        item.descripcion.toLowerCase().includes(this.searchTerm);
    });
  }

  goTo(path: string) {
    this.router.navigateByUrl('item/detail/' + path);
  }

  goHome() {
    this.router.navigateByUrl('home');
  }

  goToAgregarItem() {
    this.router.navigateByUrl('item/agregar-item');
    console.log("funciono")
   }
}
