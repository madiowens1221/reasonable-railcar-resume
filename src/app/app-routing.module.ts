import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {path: '', component: MainPageComponent}
    ])
],
exports: [RouterModule]
})
export class AppRoutingModule {
}
