import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToScreenComponentComponent } from './add-to-screen-component.component';

describe('AddToScreenComponentComponent', () => {
  let component: AddToScreenComponentComponent;
  let fixture: ComponentFixture<AddToScreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToScreenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
