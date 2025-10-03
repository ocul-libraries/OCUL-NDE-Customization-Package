import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OculLocationItemsFilterComponent } from './ocul-location-items-filter.component';

describe('OculLocationItemsFilterComponent', () => {
  let component: OculLocationItemsFilterComponent;
  let fixture: ComponentFixture<OculLocationItemsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OculLocationItemsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OculLocationItemsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
