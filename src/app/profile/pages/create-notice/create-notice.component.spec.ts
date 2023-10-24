import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoticeComponent } from './create-notice.component';

describe('CreateNoticeComponent', () => {
  let component: CreateNoticeComponent;
  let fixture: ComponentFixture<CreateNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNoticeComponent]
    });
    fixture = TestBed.createComponent(CreateNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
