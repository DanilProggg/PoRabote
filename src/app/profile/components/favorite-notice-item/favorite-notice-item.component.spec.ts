import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteNoticeItemComponent } from './favorite-notice-item.component';

describe('FavoriteNoticeItemComponent', () => {
  let component: FavoriteNoticeItemComponent;
  let fixture: ComponentFixture<FavoriteNoticeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteNoticeItemComponent]
    });
    fixture = TestBed.createComponent(FavoriteNoticeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
