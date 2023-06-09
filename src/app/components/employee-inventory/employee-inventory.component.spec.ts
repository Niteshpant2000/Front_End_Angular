import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInventoryComponent } from './employee-inventory.component';

describe('EmployeeInventoryComponent', () => {
  let component: EmployeeInventoryComponent;
  let fixture: ComponentFixture<EmployeeInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
