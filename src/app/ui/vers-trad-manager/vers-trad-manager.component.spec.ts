import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersTradManagerComponent } from './vers-trad-manager.component';

describe('VersTradManagerComponent', () => {
  let component: VersTradManagerComponent;
  let fixture: ComponentFixture<VersTradManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersTradManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersTradManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
