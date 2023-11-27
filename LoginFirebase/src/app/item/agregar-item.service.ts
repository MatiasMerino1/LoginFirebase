import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AgregarItemService {

  constructor(
    private firestore : Firestore,
  ) { }



  getDocuments (path:string) {
    const notesRef = collection(this.firestore, path);
    return getDocs(notesRef);
  }

  getDocument(path:string, id:any) {
    const docRef = doc(this.firestore, path, id);
    return getDoc(docRef);
  }

  addCosa (cosa:any, path:string) {
    const notesRef = collection(this.firestore, path);
    return addDoc(notesRef,cosa);
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
