import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSComponent } from './filter-s.component';

describe('FilterSComponent', () => {
  let component: FilterSComponent;
  let fixture: ComponentFixture<FilterSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
