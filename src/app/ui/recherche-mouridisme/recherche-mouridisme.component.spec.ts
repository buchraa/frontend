import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMouridismeComponent } from './recherche-mouridisme.component';

describe('RechercheMouridismeComponent', () => {
  let component: RechercheMouridismeComponent;
  let fixture: ComponentFixture<RechercheMouridismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheMouridismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMouridismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
