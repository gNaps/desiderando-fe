import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftEditComponent } from 'src/app/shared/gift/gift-edit/gift-edit.component';
import { GiftViewComponent } from 'src/app/shared/gift/gift-view/gift-view.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
