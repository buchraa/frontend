import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVersComponent } from './view-vers.component';

describe('ViewVersComponent', () => {
  let component: ViewVersComponent;
  let fixture: ComponentFixture<ViewVersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
