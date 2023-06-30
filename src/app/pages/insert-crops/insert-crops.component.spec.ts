import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCropsComponent } from './insert-crops.component';

describe('InsertCropsComponent', () => {
  let component: InsertCropsComponent;
  let fixture: ComponentFixture<InsertCropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCropsComponent]
    });
    fixture = TestBed.createComponent(InsertCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
