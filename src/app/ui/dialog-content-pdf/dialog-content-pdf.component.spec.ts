import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentPdfComponent } from './dialog-content-pdf.component';

describe('DialogContentPdfComponent', () => {
  let component: DialogContentPdfComponent;
  let fixture: ComponentFixture<DialogContentPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
