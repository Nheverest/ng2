import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { SelectService } from './select-service';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SelectService,DurationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
