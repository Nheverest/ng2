import { Component, OnInit, Input } from '@angular/core';
import { SelectService } from '../select-service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() type:string;
  constructor(protected selectService:SelectService) { 
  }

  // stores current value, to enable checks before change
  private _currentValue:string;

  // wrappers for selectService to be used in template
  public options = this.selectService.options;
  public usedOptions = this.selectService.usedOptions;

  ngOnInit() {
    this._currentValue = this.type;
    this.selectService.markOptionUsed(this._currentValue);
  }

  public onChange(newValue:string) {
    console.log("newValue: " + newValue);
    if ( this._currentValue !== newValue) {
      this.selectService.markOptionUnused(this._currentValue);
      this._currentValue = newValue;
      this.selectService.markOptionUsed(this._currentValue);
      console.log("==>" + this.selectService.usedOptions);
    }
  }

show(value:string):boolean {
  let doHide:boolean;
  doHide = this.usedOptions.indexOf(value) !==-1
    && value !== this.type;
  return doHide;}
}
