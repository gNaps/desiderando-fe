import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs';
import { GiftApiService } from 'src/app/@core/api/gift.api.service';

@Component({
  selector: 'app-personal-gift-detail',
  templateUrl: './personal-gift-detail.component.html',
  styleUrls: ['./personal-gift-detail.component.scss'],
})
export class PersonalGiftDetailComponent implements OnInit {
  giftId: string = '';
  gift: any = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private giftApiService: GiftApiService
  ) {
    this.giftId = this.route.snapshot.params['id'];
    this.giftApiService
      .findOne(this.giftId)
      .pipe(
        take(1),
        tap((data) => (this.gift = { ...data }))
      )
      .subscribe();
  }

  ngOnInit(): void {}

  onModify(): void {
    this.router.navigate(['/personal', 'edit', this.giftId]);
  }

  onDelete(): void {}
}
