import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private firestore: Firestore) { }

  async addPlace(users:User) {
    const placeRef = collection(this.firestore, 'usuario');
    return addDoc(placeRef, users);
  }

  getPlaces(): Observable<User[]> {
    const placeRef = collection(this.firestore, 'usuario');
    return collectionData(placeRef, { idField: 'id' }) as Observable<User[]>;
  }

  deletePlace(users: User) {
    const placeDocRef = doc(this.firestore, `usuario/${users.id}`);
    return deleteDoc(placeDocRef);
  }

}
