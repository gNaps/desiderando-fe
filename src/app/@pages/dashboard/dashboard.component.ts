import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { GiftApiService } from 'src/app/@core/api/gift.api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  gifts$: Subject<void> = new Subject();
  gifts: any[] = [];
  unsubscribe$: Subject<void> = new Subject();

  constructor(private giftsApiService: GiftApiService, private router: Router) {
    this.gifts$
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap(() => this.giftsApiService.dashboard()),
        tap((data) => (this.gifts = [...data])),

        tap(() => console.log('gifts', this.gifts))
      )
      .subscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit() {
    this.onRefreshGifts();
  }

  onRefreshGifts(): void {
    this.gifts$.next();
  }

  onOpenFriendDetail(gift: any) {
    this.router.navigate(['/friends', gift.createdBy._id]);
  }

  onOpenGiftDetail(gift: any) {
    this.router.navigate(['/friends', gift.createdBy._id, 'gift', gift._id]);
  }
}
