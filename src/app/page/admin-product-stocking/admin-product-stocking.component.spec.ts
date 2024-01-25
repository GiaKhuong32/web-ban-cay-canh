import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductStockingComponent } from './admin-product-stocking.component';

describe('AdminProductStockingComponent', () => {
  let component: AdminProductStockingComponent;
  let fixture: ComponentFixture<AdminProductStockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductStockingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProductStockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
