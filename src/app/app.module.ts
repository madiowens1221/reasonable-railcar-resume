import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './shared/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
