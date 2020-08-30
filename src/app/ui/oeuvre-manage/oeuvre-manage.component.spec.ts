import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvreManageComponent } from './oeuvre-manage.component';

describe('OeuvreManageComponent', () => {
  let component: OeuvreManageComponent;
  let fixture: ComponentFixture<OeuvreManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvreManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvreManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
