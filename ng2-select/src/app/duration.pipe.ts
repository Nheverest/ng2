import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public units = [
          {unit:"minute(s)",value:60}, 
          {unit:"hour(s)",value:60}, 
          {unit:"day(s)",value:24}, 
//          {unit:"week(s)",value:7}, 
          {unit:"month(s)",value:30}, 
          {unit:"year(s)",value: 12}]

  transform(value: any, args?: any): any {
    console.log("in transform. Received: " + value);
    let computedValue: number = Number(value);
    let computedUnits:string = "seconds";
    for (let i=0; i< this.units.length; i++) {
      if (computedValue < this.units[i].value ) {
        break;
      } else {
        computedValue = computedValue / this.units[i].value;
        computedUnits = this.units[i].unit;
      }
    }
    return "Result: " + String(computedValue) + " " + computedUnits;
  }

}
