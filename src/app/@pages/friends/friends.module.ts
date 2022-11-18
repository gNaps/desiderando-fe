import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendGiftDetailComponent } from './friend-gift-detail/friend-gift-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FriendsComponent,
    FriendDetailComponent,
    FriendGiftDetailComponent,
  ],
  imports: [CommonModule, FriendsRoutingModule, SharedModule],
})
export class FriendsModule {}
