import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { FriendApiService } from 'src/app/@core/api/friend.api.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit, OnDestroy {
  friends: any[] = [];
  unsubscribe$ = new Subject<void>();

  constructor(
    private friendApiService: FriendApiService,
    private router: Router
  ) {
    this.friendApiService
      .findAll()
      .pipe(
        takeUntil(this.unsubscribe$),
        tap((data) => (this.friends = [...data])),
        tap(() => console.log('data', this.friends))
      )
      .subscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onOpenDetail(friendId: string) {
    console.log(friendId);
    this.router.navigate(['/friends', friendId]);
  }
}
