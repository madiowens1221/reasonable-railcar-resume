import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: Router;

  isHomeRaised: boolean = true;
  isEduRaised: boolean = false;
  isSkillsRaised: boolean = false;
  isHiProjRaised: boolean = false;
  isWrkExpRaised: boolean = false;

  constructor(private _router: Router) {
    this.router = _router;
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });
  }

  checkRoute() {
    if(this.router.url === "/home")
    {
      this.isHomeRaised = true;

      this.isEduRaised = this.isHiProjRaised = this.isSkillsRaised = this.isWrkExpRaised = false;
    }
    if(this.router.url === "/education")
    {
      this.isEduRaised = true;
      this.isHiProjRaised = this.isHomeRaised = this.isSkillsRaised = this.isWrkExpRaised = false;
      
    }
    if(this.router.url === "/skills")
    {
      this.isSkillsRaised = true;
      this.isEduRaised = this.isHiProjRaised = this.isHomeRaised = this.isWrkExpRaised = false;
      
    }
    if(this.router.url === "/highlighted-projects")
    {
      this.isHiProjRaised = true;
      this.isEduRaised = this.isHomeRaised = this.isSkillsRaised = this.isWrkExpRaised = false;
      
    }
    if(this.router.url === "/work-experience")
    {
      this.isWrkExpRaised = true;
      this.isEduRaised = this.isHiProjRaised = this.isHomeRaised = this.isSkillsRaised = false;
      
    }
  }
}
