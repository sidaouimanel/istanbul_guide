import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPlacesComponent } from './famous-places.component';

describe('FamousPlacesComponent', () => {
  let component: FamousPlacesComponent;
  let fixture: ComponentFixture<FamousPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamousPlacesComponent]
    });
    fixture = TestBed.createComponent(FamousPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
