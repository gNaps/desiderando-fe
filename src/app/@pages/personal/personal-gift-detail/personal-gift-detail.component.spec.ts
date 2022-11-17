import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGiftDetailComponent } from './personal-gift-detail.component';

describe('PersonalGiftDetailComponent', () => {
  let component: PersonalGiftDetailComponent;
  let fixture: ComponentFixture<PersonalGiftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalGiftDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalGiftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
