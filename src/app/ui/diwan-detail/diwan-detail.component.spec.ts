import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiwanDetailComponent } from './diwan-detail.component';

describe('DiwanDetailComponent', () => {
  let component: DiwanDetailComponent;
  let fixture: ComponentFixture<DiwanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiwanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiwanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
