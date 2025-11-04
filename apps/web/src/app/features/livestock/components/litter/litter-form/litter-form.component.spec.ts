import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterFormComponent } from './litter-form.component';

describe('LitterFormComponent', () => {
  let component: LitterFormComponent;
  let fixture: ComponentFixture<LitterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitterFormComponent]
    });
    fixture = TestBed.createComponent(LitterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
