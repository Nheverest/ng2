import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable  } from 'rxjs'; 

import { Consommation } from '../shared/consommation';

@Injectable()
export class PersistanceService {

  CONSO = 'CONSO';
  constructor() { }

  private _counterSubject = new BehaviorSubject<number>(0);

  counter = this._counterSubject.asObservable();

  setCounter(newVal: number): void {
    this._counterSubject.next(newVal);
  }


  loadData(): Consommation[] {
    let result = JSON.parse(localStorage.getItem(this.CONSO));
    if ( result) {
      return result;
    } else {
      return [];
    }
  }

  persistData(data: Consommation[]): void {
    localStorage.setItem(this.CONSO, JSON.stringify(data));
  }

  persistItem(item: Consommation): void {
    let data = this.loadData();
    let entry = this.getItem(item.date);
    // If entry exists, delete it first
    if ( entry.date ) {
      data = data.filter(item => item.date != entry.date);
    } 
    data.push(item);
    this.persistData(data);
  }

  deleteItem(item: Consommation): void {
    let data = this.loadData();
    let entry = this.getItem(item.date);
    // If entry exists, delete it first
    if ( entry.date ) {
      data = data.filter(item => item.date != entry.date);
    } 
    this.persistData(data);
  }

  /*
    Return new object when not found
  */
  getItem(date: Date): Consommation {
    let data = this.loadData();
    if ( data ) { 
      return data.find(elt => {return date == elt.date}) || new Consommation();
    } else {
      return new Consommation();
    }
  }
    
  exportData() {}

}
