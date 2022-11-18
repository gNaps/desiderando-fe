import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs';
import { GiftApiService } from 'src/app/@core/api/gift.api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { NotificationsService } from 'src/app/@core/services/notifications.service';

@Component({
  selector: 'app-friend-gift-detail',
  templateUrl: './friend-gift-detail.component.html',
  styleUrls: ['./friend-gift-detail.component.scss'],
})
export class FriendGiftDetailComponent implements OnInit {
  giftId: string = '';
  gift: any = null;
  isGifter = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private giftApiService: GiftApiService,
    private notificationService: NotificationsService,
    private authService: AuthService
  ) {
    this.giftId = this.route.snapshot.params['id'];
    this.giftApiService
      .findOne(this.giftId)
      .pipe(
        take(1),
        tap((data) => {
          this.gift = { ...data };
          this.isGifter =
            this.gift.giftBy &&
            this.authService.getCurrentUser()._id === this.gift.giftBy._id;
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  onBook(): void {
    this.giftApiService
      .book(this.giftId)
      .pipe(
        take(1),
        tap(() => {
          this.notificationService.showSuccess();
          this.gift.giftBy = {
            ...this.authService.getCurrentUser(),
          };
          this.isGifter = true;
        })
      )
      .subscribe();
  }

  onUnbook(): void {
    this.giftApiService
      .unbook(this.giftId)
      .pipe(
        take(1),
        tap(() => {
          this.notificationService.showSuccess();
          this.gift.giftBy = null;
          this.isGifter = false;
        })
      )
      .subscribe();
  }
}
