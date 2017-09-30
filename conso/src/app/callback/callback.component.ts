import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthentication('/conso/edit');
  }

}
