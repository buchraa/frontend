import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiwanComponent } from './add-diwan.component';

describe('AddDiwanComponent', () => {
  let component: AddDiwanComponent;
  let fixture: ComponentFixture<AddDiwanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiwanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiwanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
