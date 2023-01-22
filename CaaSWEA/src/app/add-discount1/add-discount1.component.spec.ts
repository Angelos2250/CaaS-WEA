import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscount1Component } from './add-discount1.component';

describe('AddDiscount1Component', () => {
  let component: AddDiscount1Component;
  let fixture: ComponentFixture<AddDiscount1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscount1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDiscount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
