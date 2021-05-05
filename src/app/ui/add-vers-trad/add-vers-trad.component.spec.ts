import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVersTradComponent } from './add-vers-trad.component';

describe('AddVersTradComponent', () => {
  let component: AddVersTradComponent;
  let fixture: ComponentFixture<AddVersTradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVersTradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVersTradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
