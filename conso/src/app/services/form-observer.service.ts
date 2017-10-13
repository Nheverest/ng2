import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { HomeComponent } from '../home/home.component';

@Injectable()
export class FormObserverService implements CanDeactivate<HomeComponent> {

  doDeactivate: boolean = true;
  constructor() {
    this.userConfirmObserver.subscribe(value => {
      this.doDeactivate = value;
    });

  }

  askUserConfirm: boolean = false;
  askUserConfirmObserver: BehaviorSubject<boolean> = new BehaviorSubject(this.askUserConfirm);

  userConfirm: boolean = false;
  userConfirmObserver: BehaviorSubject<boolean> = new BehaviorSubject(this.userConfirm);

  canDeactivate(component: HomeComponent): boolean {
    let result: boolean = true;
    // simulate a change in form data
    if (true) {
      this.askUserConfirmObserver.next(true);
    }
    return this.doDeactivate;
  }
}
