import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersManageComponent } from './vers-manage.component';

describe('VersManageComponent', () => {
  let component: VersManageComponent;
  let fixture: ComponentFixture<VersManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
