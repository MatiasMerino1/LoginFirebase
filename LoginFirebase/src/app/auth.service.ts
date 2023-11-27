import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, docSnapshots, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private auth : Auth,
    private firestore :Firestore,
  ) { }

  async register ({email,password}:any) {

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
    return signOut(this.auth),
    this.router.navigateByUrl('registro');
  }

  updateDocument (updateData:any,path:string, id:string) {
    const docRef = doc(this.firestore, path, id);
    return updateDoc(docRef, updateData);
  }

  deleteDocument (path:string, id:string) {
    const docRef = doc(this.firestore, path, id);
    return deleteDoc(docRef);
}
}
