import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddProductComponent } from './employee-add-product.component';

describe('EmployeeAddProductComponent', () => {
  let component: EmployeeAddProductComponent;
  let fixture: ComponentFixture<EmployeeAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
