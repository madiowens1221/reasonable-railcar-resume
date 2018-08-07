import { NgModule } from '@angular/core';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MainPageComponent,
        ProfileComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainPageRoutingModule
    ],
    exports: [

    ],
    providers: [],
})
export class MainPageModule { }
