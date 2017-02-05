import { Component } from '@angular/core';
import { SelectService} from './select-service';
import { DurationPipe } from './duration.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(protected selectService:SelectService)  {}

  usedOptions:string[] = this.selectService.usedOptions;

  title = 'app works!';
  seconds:number = 0;
}
