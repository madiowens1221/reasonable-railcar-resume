import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './shared/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
