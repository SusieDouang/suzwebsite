import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuzComponent } from './suzwebsite/suz.component';


@NgModule({
  declarations: [
    SuzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SuzComponent]
})
export class AppModule { }
