import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  documents !: any[];
  credentials: any[] = [];
  constructor(
    private authService: AuthService,
  ) { }
  async getAllUsuarios () {
    const path = 'usuarios';
    this.documents = (await this.authService.getDocuments(path)).docs;

    for (const element of this.documents){
      const credentials= (await this.authService.getDocument(path, element.id)).data();
      this.credentials.push({
        id:element.id,
        ...credentials,
      });
    }
    return [...this.credentials];
  }
  async getUsuario (id:string){
      return {
        ...this.credentials.find( credentials => {
          return credentials.id === id;
        })
      };
    }
  updateUsuario (id:string, updateData:any) {
    //console.log("Actualizando, paso 2");
    this.authService.updateDocument(updateData, 'usuarios', id);
  }

  deleteUsuario (id:string) {
    this.authService.deleteDocument('usuarios',id);
  }
}
