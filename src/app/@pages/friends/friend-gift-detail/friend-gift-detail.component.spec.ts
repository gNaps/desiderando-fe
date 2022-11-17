import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendGiftDetailComponent } from './friend-gift-detail.component';

describe('FriendGiftDetailComponent', () => {
  let component: FriendGiftDetailComponent;
  let fixture: ComponentFixture<FriendGiftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendGiftDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendGiftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
