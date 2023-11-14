import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumesItemComponent } from './resumes-item.component';

describe('ResumesItemComponent', () => {
  let component: ResumesItemComponent;
  let fixture: ComponentFixture<ResumesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumesItemComponent]
    });
    fixture = TestBed.createComponent(ResumesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
