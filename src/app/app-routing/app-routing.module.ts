import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { Route } from '@angular/router/src/config';
import { HomeComponent } from '../home/home.component'
import { TestpageComponent } from '../testpage/testpage.component'
import { EduComponent } from '../edu/edu.component'
import { SkillsComponent } from '../skills/skills.component'
import { HiprojComponent } from '../hiproj/hiproj.component'
import { WrkexpComponent } from '../wrkexp/wrkexp.component'

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'education', component: EduComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'highlighted-projects', component: HiprojComponent},
    {path: 'work-experience', component: WrkexpComponent},
    {path: 'testpage', component: TestpageComponent},    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}