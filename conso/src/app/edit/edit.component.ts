import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PersistanceService } from '../_services/persistance.service';
import { Consommation } from '../shared/consommation';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  counter: number;
  conso: Consommation;

  // Subscriptions explicitly declared so as to prevent memory leaks (as they say...)
  counterSubscription: Subscription;
  paramSubscription: Subscription;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PersistanceService) { }

  ngOnInit() {
    this.counterSubscription = this.service.counter.subscribe( 
      value => {
        this.counter = value;
      }
    );
    this.paramSubscription = this.route
    .queryParams
    .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.conso = this.service.getItem(params['date']);
      });
      
  }

    ngOnDestroy() {
      this.counterSubscription.unsubscribe();
      this.paramSubscription.unsubscribe();
    }
  
    onSubmit() {
      this.service.persistItem(this.conso);
      this.router.navigate(['/list']);
    }

    onCancel() {
      this.router.navigate(['/list']);
    }

    onDelete() {
      this.service.deleteItem(this.conso);
      this.router.navigate(['/list']);
    }

    onAdd() {
      this.service.setCounter(this.counter +1);
    }
  }
