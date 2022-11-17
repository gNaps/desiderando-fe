import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, switchMap, tap } from 'rxjs';
import { GiftApiService } from 'src/app/@core/api/gift.api.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  gifts$: Subject<void> = new Subject();
  gifts: any[] = [];
  unsubscribe$: Subject<void> = new Subject();

  constructor(private giftsApiService: GiftApiService, private router: Router) {
    this.gifts$
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap(() => this.giftsApiService.findAll()),
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

  onOpenGiftDetail(gift: any) {
    this.router.navigate(['/personal', gift._id]);
  }
}
