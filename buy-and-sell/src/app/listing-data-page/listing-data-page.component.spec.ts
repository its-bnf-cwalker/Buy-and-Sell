import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDataPageComponent } from './listing-data-page.component';

describe('ListingDataPageComponent', () => {
  let component: ListingDataPageComponent;
  let fixture: ComponentFixture<ListingDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
