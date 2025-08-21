import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrakshStoreComponent } from './rudraksh-store.component';

describe('RudrakshStoreComponent', () => {
  let component: RudrakshStoreComponent;
  let fixture: ComponentFixture<RudrakshStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RudrakshStoreComponent]
    });
    fixture = TestBed.createComponent(RudrakshStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
