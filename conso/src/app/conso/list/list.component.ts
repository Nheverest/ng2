import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePipe } from '@angular/common';

import { PersistanceService } from '../services/persistance.service';
import { Consommation } from '../shared/consommation';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Consommation[];

  constructor(
    private router: Router, 
    private service: PersistanceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.service.loadData();
    if ( this.list ) {
      this.list.sort(function(item1,item2) {
        if ( item1.date < item2.date ) {
          return -1;
        } else if ( item1.date == item2.date) {
          return 0
        } else {
          return 1;
        }
      });
    }
  }

  onEdit(date: number) {
    this.router.navigate(
      ['edit'], 
      { queryParams: { date: date },
        relativeTo: this.route.parent });
  }

  onAdd() {
    this.router.navigate(['edit'], { relativeTo: this.route.parent});
  }
}
