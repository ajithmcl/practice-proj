import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedseatComponent } from './selectedseat.component';

describe('SelectedseatComponent', () => {
  let component: SelectedseatComponent;
  let fixture: ComponentFixture<SelectedseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
