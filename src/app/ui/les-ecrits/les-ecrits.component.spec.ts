import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesEcritsComponent } from './les-ecrits.component';

describe('LesEcritsComponent', () => {
  let component: LesEcritsComponent;
  let fixture: ComponentFixture<LesEcritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesEcritsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesEcritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
