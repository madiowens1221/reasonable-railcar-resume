import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiprojComponent } from './hiproj.component';

describe('HiprojComponent', () => {
  let component: HiprojComponent;
  let fixture: ComponentFixture<HiprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
