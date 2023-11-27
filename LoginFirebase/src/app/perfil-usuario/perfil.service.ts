import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  documents !: any[];
  credentials!: any;
  updateForm: any;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }
  get email () {return this.credentials.get('email');}
  get password () {return this.credentials.get('password');}
  get username () {return this.credentials.get('username');}
  get cellphone () {return this.credentials.get('cellphone');}

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



  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.maxLength(100)]],
      username:['',[Validators.required,Validators.maxLength(100)]],
      cellphone:['',[Validators.required,Validators.maxLength(100)]]
    });
  }
  async getUsuario (id:string){
      return {
        ...this.credentials.find( (credentials: { id: string; }) => {
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
