import { Injectable } from '@angular/core';
import { AgregarItemService } from './agregar-item.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  documents!: any[];
  items : any[]=[];
 constructor(private authService:AuthService){ }

 async getAllItems () {
  const path = 'items';
  this.documents = (await this.authService.getDocuments(path)).docs;

  for (const element of this.documents){
    const item = (await this.authService.getDocument(path, element.id)).data();
    this.items.push({
      id:element.id,
      ...item,
    });
  }

  return [...this.items];
}

     getItem (id:string){
    return {
      ...this.items.find( item => {
        return item.id === id;
      })
    };
  }
  updateItem (id:string, updateData:any) {
    //console.log("Actualizando, paso 2");
    this.authService.updateDocument(updateData, 'items', id);
  }

  deleteItem (id:string) {
    this.authService.deleteDocument('items',id);
  }

}


