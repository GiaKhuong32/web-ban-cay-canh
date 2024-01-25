import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtreeComponent } from './imgtree.component';

describe('ImgtreeComponent', () => {
  let component: ImgtreeComponent;
  let fixture: ComponentFixture<ImgtreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgtreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
