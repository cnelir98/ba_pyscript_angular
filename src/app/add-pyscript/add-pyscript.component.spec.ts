import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPyscriptComponent } from './add-pyscript.component';

describe('AddPyscriptComponent', () => {
  let component: AddPyscriptComponent;
  let fixture: ComponentFixture<AddPyscriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPyscriptComponent]
    });
    fixture = TestBed.createComponent(AddPyscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
