import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFilterComponent } from './resume-filter.component';

describe('ResumeFilterComponent', () => {
  let component: ResumeFilterComponent;
  let fixture: ComponentFixture<ResumeFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeFilterComponent]
    });
    fixture = TestBed.createComponent(ResumeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
