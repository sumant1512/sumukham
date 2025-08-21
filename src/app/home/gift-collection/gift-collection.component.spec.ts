import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCollectionComponent } from './gift-collection.component';

describe('GiftCollectionComponent', () => {
  let component: GiftCollectionComponent;
  let fixture: ComponentFixture<GiftCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftCollectionComponent]
    });
    fixture = TestBed.createComponent(GiftCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
