import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalGiftDetailComponent } from './personal-gift-detail/personal-gift-detail.component';
import { PersonalGiftEditComponent } from './personal-gift-edit/personal-gift-edit.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
  {
    path: 'new',
    component: PersonalGiftEditComponent,
  },
  {
    path: ':id',
    component: PersonalGiftDetailComponent,
  },
  {
    path: 'edit/:id',
    component: PersonalGiftEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
