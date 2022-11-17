import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGiftEditComponent } from './personal-gift-edit.component';

describe('PersonalGiftEditComponent', () => {
  let component: PersonalGiftEditComponent;
  let fixture: ComponentFixture<PersonalGiftEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalGiftEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalGiftEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
