import { Component } from '@angular/core';
import { SelectService} from './select-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(protected selectService:SelectService)  {}

  usedOptions:string[] = this.selectService.usedOptions;
}
