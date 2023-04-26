import { Injectable } from '@angular/core';
import Trabajador from '../interfaces/trabajador.interface';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor(private firestore: Firestore) { }

  async addPlace(traba:Trabajador) {
    const placeRef = collection(this.firestore, 'trabajador');
    return addDoc(placeRef, traba);
  }

  getPlaces(): Observable<Trabajador[]> {
    const placeRef = collection(this.firestore, 'trabajador');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Trabajador[]>;
  }

  deletePlace(traba: Trabajador) {
    const placeDocRef = doc(this.firestore, `trabajador/${traba.id}`);
    return deleteDoc(placeDocRef);
  }
}
