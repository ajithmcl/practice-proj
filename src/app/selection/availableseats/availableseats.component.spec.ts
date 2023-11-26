import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableseatsComponent } from './availableseats.component';

describe('AvailableseatsComponent', () => {
  let component: AvailableseatsComponent;
  let fixture: ComponentFixture<AvailableseatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableseatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
