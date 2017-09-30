import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PersistanceService } from '../services/persistance.service';
import { Consommation } from '../shared/consommation';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  conso: Consommation;

  // Subscriptions explicitly declared so as to prevent memory leaks (as they say...)
  paramSubscription: Subscription;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PersistanceService) { }

  ngOnInit() {
    // retrieves the requested database entry, if any
    this.paramSubscription = this.route
    .queryParams
    .subscribe(params => {
        this.conso = this.service.getItem(params['id']);
        // no entry found => defaults to today's date
        if ( ! this.conso.date ) {
          this.conso.date = new Date();
        }
      });
      
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  onSubmit() {
    this.service.persistItem(this.conso);
    this.router.navigate(['list'], { relativeTo: this.route.parent });
  }

  onCancel() {
    this.router.navigate(['list'], { relativeTo: this.route.parent });
  }

  onDelete() {
    this.service.deleteItem(this.conso);
    this.router.navigate(['list'], { relativeTo: this.route.parent });
  }
}
