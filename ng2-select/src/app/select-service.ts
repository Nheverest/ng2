import { Injectable } from '@angular/core';

/**
 * Simple service that publishes a list of options, and maintains 
 * a list of used options in current module. 
 */
@Injectable()
export class SelectService {

  constructor() { }

  public options = ['LOWER','UPPER','NUMBER','SPECIAL'];

  public usedOptions: string[] = [];
  
  public markOptionUsed(option: string):void {
      this.usedOptions.push(option);
  }

  public markOptionUnused(option: string): void {
      this.usedOptions.splice(this.usedOptions.indexOf(option),1);
  }

}
