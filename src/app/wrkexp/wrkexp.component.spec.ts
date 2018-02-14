import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrkexpComponent } from './wrkexp.component';

describe('WrkexpComponent', () => {
  let component: WrkexpComponent;
  let fixture: ComponentFixture<WrkexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrkexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrkexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
