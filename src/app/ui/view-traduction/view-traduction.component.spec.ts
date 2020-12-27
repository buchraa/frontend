import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTraductionComponent } from './view-traduction.component';

describe('ViewTraductionComponent', () => {
  let component: ViewTraductionComponent;
  let fixture: ComponentFixture<ViewTraductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTraductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTraductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
