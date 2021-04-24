import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRegisterComponent } from './guest-register.component';

describe('GuestRegisterComponent', () => {
  let component: GuestRegisterComponent;
  let fixture: ComponentFixture<GuestRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
