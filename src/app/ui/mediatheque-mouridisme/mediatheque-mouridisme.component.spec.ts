import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediathequeMouridismeComponent } from './mediatheque-mouridisme.component';

describe('MediathequeMouridismeComponent', () => {
  let component: MediathequeMouridismeComponent;
  let fixture: ComponentFixture<MediathequeMouridismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediathequeMouridismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediathequeMouridismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
