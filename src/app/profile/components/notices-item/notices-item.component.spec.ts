import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesItemComponent } from './notices-item.component';

describe('NoticesItemComponent', () => {
  let component: NoticesItemComponent;
  let fixture: ComponentFixture<NoticesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticesItemComponent]
    });
    fixture = TestBed.createComponent(NoticesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
