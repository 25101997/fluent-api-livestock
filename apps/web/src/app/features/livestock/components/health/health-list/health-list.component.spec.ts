import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthListComponent } from './health-list.component';

describe('HealthListComponent', () => {
  let component: HealthListComponent;
  let fixture: ComponentFixture<HealthListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthListComponent]
    });
    fixture = TestBed.createComponent(HealthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
