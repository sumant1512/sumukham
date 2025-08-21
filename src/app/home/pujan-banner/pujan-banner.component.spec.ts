import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PujanBannerComponent } from './pujan-banner.component';

describe('PujanBannerComponent', () => {
  let component: PujanBannerComponent;
  let fixture: ComponentFixture<PujanBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PujanBannerComponent]
    });
    fixture = TestBed.createComponent(PujanBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
