import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.css']
})
export class CallBackComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  fragment: string;

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      if ( fragment ) {
        let params = fragment.split('&');
        params.forEach(element => {
          if (element ) {
            let keypair = element.split('=');
            console.log(keypair[0] + '=' + keypair[1]);
          }
        });
      }
      console.log("Full fragment: " + fragment)});
  }

}
