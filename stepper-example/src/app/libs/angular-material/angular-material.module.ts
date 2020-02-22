import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientModule,
    MatNativeDateModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: []
})
export class AngularMaterialModule {}
