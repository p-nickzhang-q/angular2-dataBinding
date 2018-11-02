import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuateComponent } from './price-quate.component';

describe('PriceQuateComponent', () => {
  let component: PriceQuateComponent;
  let fixture: ComponentFixture<PriceQuateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceQuateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQuateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
