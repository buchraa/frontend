import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvreMouridismeComponent } from './oeuvre-mouridisme.component';

describe('OeuvreMouridismeComponent', () => {
  let component: OeuvreMouridismeComponent;
  let fixture: ComponentFixture<OeuvreMouridismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeuvreMouridismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvreMouridismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
