import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalStoreComponent } from './crystal-store.component';

describe('CrystalStoreComponent', () => {
  let component: CrystalStoreComponent;
  let fixture: ComponentFixture<CrystalStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrystalStoreComponent]
    });
    fixture = TestBed.createComponent(CrystalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
