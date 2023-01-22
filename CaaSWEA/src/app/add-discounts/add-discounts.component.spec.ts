import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountsComponent } from './add-discounts.component';

describe('AddDiscountsComponent', () => {
  let component: AddDiscountsComponent;
  let fixture: ComponentFixture<AddDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
