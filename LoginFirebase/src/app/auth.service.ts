import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, docSnapshots, getDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth : Auth,
    private firestore :Firestore,
  ) { }

  async register ({email,password,username, age, cellphone}:any) {


    try {
      console.log("Intentando crear usuario",email);
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async login ({email,password}:any) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  getDocuments (path:string) {
      const notesRef = collection(this.firestore, path);
      return getDocs(notesRef);
    }

  getDocument(path:string, id:any) {
    const docRef = doc(this.firestore, path, id);
    return getDoc(docRef);
  }

  agregarUsuario (usuario:any, path:string) {
    const notesRef = collection(this.firestore, path);
    return addDoc(notesRef,usuario);
  }

  logout () {
    return signOut(this.auth);
  }


}