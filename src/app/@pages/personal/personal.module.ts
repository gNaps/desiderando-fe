import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalGiftDetailComponent } from './personal-gift-detail/personal-gift-detail.component';
import { PersonalGiftEditComponent } from './personal-gift-edit/personal-gift-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PersonalComponent,
    PersonalGiftDetailComponent,
    PersonalGiftEditComponent,
  ],
  imports: [CommonModule, PersonalRoutingModule, SharedModule],
})
export class PersonalModule {}
