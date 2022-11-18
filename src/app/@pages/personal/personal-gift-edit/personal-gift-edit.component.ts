import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { GiftApiService } from 'src/app/@core/api/gift.api.service';
import { NotificationsService } from 'src/app/@core/services/notifications.service';

@Component({
  selector: 'app-personal-gift-edit',
  templateUrl: './personal-gift-edit.component.html',
  styleUrls: ['./personal-gift-edit.component.scss'],
})
export class PersonalGiftEditComponent implements OnInit {
  giftId: string = '';
  isEdit: boolean = false;
  gift: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private giftApiService: GiftApiService,
    private notificationService: NotificationsService
  ) {
    this.giftId = this.route.snapshot.params['id'];
    this.isEdit = this.giftId ? true : false;

    if (this.isEdit) {
      this.giftApiService
        .findOne(this.giftId)
        .pipe(
          take(1),
          tap((data) => (this.gift = { ...data }))
        )
        .subscribe();
    }
  }

  ngOnInit(): void {}

  onCreate(gift: any): void {
    this.giftApiService
      .create(gift)
      .pipe(
        take(1),
        tap((data: any) => {
          this.notificationService.showSuccess();
          this.router.navigate(['/personal']);
        })
      )
      .subscribe();
  }

  onUpdate(gift: any): void {
    this.giftApiService
      .update(this.giftId, gift)
      .pipe(
        take(1),
        tap((data: any) => {
          this.notificationService.showSuccess();
          this.router.navigate(['/personal', this.giftId]);
        })
      )
      .subscribe();
  }

  onCancel() {
    this.router.navigate(['/personal', this.giftId]);
  }
}
