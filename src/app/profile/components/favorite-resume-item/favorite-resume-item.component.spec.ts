import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteResumeItemComponent } from './favorite-resume-item.component';

describe('FavoriteResumeItemComponent', () => {
  let component: FavoriteResumeItemComponent;
  let fixture: ComponentFixture<FavoriteResumeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteResumeItemComponent]
    });
    fixture = TestBed.createComponent(FavoriteResumeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
