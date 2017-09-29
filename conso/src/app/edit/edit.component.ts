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

  _counter = this.service.counter;

  get counter() {
    return this._counter;
  }
  conso: Consommation;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PersistanceService) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.conso = this.service.getItem(params['date']);
      });
      
  }

    ngOnDestroy() {
      this.sub.unsubscribe();
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
      this.service.counter++;
    }
  }
