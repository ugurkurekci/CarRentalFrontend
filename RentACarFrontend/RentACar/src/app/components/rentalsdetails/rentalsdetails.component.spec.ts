import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsdetailsComponent } from './rentalsdetails.component';

describe('RentalsdetailsComponent', () => {
  let component: RentalsdetailsComponent;
  let fixture: ComponentFixture<RentalsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
