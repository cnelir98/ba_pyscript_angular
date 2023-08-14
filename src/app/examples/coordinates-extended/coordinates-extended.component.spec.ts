import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesExtendedComponent } from './coordinates-extended.component';

describe('CoordinatesExtendedComponent', () => {
  let component: CoordinatesExtendedComponent;
  let fixture: ComponentFixture<CoordinatesExtendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatesExtendedComponent]
    });
    fixture = TestBed.createComponent(CoordinatesExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
