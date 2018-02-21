import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';

//Material.Angular
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

//Covalent
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestpageComponent } from './testpage/testpage.component';
import { SkillsComponent } from './skills/skills.component';
import { HiprojComponent } from './hiproj/hiproj.component';
import { EduComponent } from './edu/edu.component';
import { WrkexpComponent } from './wrkexp/wrkexp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestpageComponent,
    SkillsComponent,
    HiprojComponent,
    EduComponent,
    WrkexpComponent
  ],
  imports: [
    //Covalent Modules
    BrowserAnimationsModule,
    //Angular Modules
    BrowserModule,
    //Material Angular Modules
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    //Custom Modules
    AppRoutingModule,
    //flex layout
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
