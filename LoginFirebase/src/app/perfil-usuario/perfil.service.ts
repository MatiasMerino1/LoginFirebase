import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  documents !: any[];
  credentials!: any;
  updateForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {this.credentials = [];}
  

  async getAllUsuarios() {
    const path = 'usuarios';
    this.credentials = []; // Initialize credentials array
  
    this.documents = (await this.authService.getDocuments(path)).docs;
  
    for (const element of this.documents) {
      const credentials = (await this.authService.getDocument(path, element.id)).data();
      this.credentials.push({
        id: element.id,
        ...credentials,
      });
    }
    return [...this.credentials]; // Return a copy of the credentials array
  }


  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(100)]],
      username: ['', [Validators.required, Validators.maxLength(100)]],
      cellphone: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }
  async getUsuario(id: string) {
    await this.getAllUsuarios();
    return {
      ...this.credentials.find((credentials: { id: string; }) => {
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
