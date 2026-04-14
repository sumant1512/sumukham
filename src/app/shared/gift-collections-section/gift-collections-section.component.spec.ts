import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCollectionsSectionComponent } from './gift-collections-section.component';

describe('GiftCollectionsSectionComponent', () => {
  let component: GiftCollectionsSectionComponent;
  let fixture: ComponentFixture<GiftCollectionsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftCollectionsSectionComponent]
    });
    fixture = TestBed.createComponent(GiftCollectionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
