import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftEditComponent } from 'src/app/shared/gift/gift-edit/gift-edit.component';
import { GiftViewComponent } from 'src/app/shared/gift/gift-view/gift-view.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendGiftDetailComponent } from './friend-gift-detail/friend-gift-detail.component';
import { FriendsComponent } from './friends.component';

const routes: Routes = [
  {
    path: '',
    component: FriendsComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        component: FriendDetailComponent,
      },
      {
        path: 'gift',
        children: [
          {
            path: ':id',
            component: FriendGiftDetailComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsRoutingModule {}
