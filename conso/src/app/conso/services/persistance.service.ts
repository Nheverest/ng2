import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable  } from 'rxjs'; 

import { Consommation, DB_model } from '../shared/consommation';

@Injectable()
export class PersistanceService {

  CONSO = 'CONSO';
  constructor() { }

  private maxId: number = 0;

  // Reads all data from database
  // Sets the max id in service variable, 
  // and returns list of Consommations
  loadData(): Consommation[] {
    let result: DB_model = JSON.parse(localStorage.getItem(this.CONSO));
    if ( result ) { 
      this.maxId = result.maxId || result.items.length;
      return result.items;
    } else {
      return [];
    }
  }

  persistData(data: Consommation[]): void {
    let result: DB_model = new DB_model();
    result.maxId = this.maxId;
    result.items = data;
    localStorage.setItem(this.CONSO, JSON.stringify(result));
  }

  persistItem(item: Consommation): void {
    let data: Consommation[] = this.loadData();
    let entry = this.getItem(item.id);
    // If entry exists, delete it first
    if ( entry.id ) {
      data = data.filter(item => item.date != entry.date);
    } else {
      item.id = ++this.maxId;
    }
    data.push(item);
    this.persistData(data);
  }

  deleteItem(item: Consommation): void {
    let data = this.loadData();
    let entry = this.getItem(item.id);
    // If entry exists, delete it first
    if ( entry.date ) {
      data = data.filter(item => item.date != entry.date);
    } 
    this.persistData(data);
  }

  /*
    Return new object when not found
  */
  getItem(id: number): Consommation {
    let data = this.loadData();
    if ( data ) { 
      return data.find(elt => {return id == elt.id}) || new Consommation();
    } else {
      return new Consommation();
    }
  }
    
  exportData() {}

}
