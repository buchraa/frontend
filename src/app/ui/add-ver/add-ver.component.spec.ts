import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerComponent } from './add-ver.component';

describe('AddVerComponent', () => {
  let component: AddVerComponent;
  let fixture: ComponentFixture<AddVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
