import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepperOverviewExampleComponent } from './stepper-overview-example/stepper-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperOverviewExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
