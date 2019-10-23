import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Policy} from 'src/app/policy'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore:AngularFirestore) { }

  getStudent(){
    return this.firestore.collection('Estudiante').snapshotChanges();
  }
}
