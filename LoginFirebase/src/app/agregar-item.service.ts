import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, docSnapshots, getDoc, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgregarItemService {

  constructor(
    private firestore : Firestore,
    private router:Router
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

}
