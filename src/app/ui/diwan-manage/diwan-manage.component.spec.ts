import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiwanManageComponent } from './diwan-manage.component';

describe('DiwanManageComponent', () => {
  let component: DiwanManageComponent;
  let fixture: ComponentFixture<DiwanManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiwanManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiwanManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
