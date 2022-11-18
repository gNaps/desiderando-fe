import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { FriendApiService } from 'src/app/@core/api/friend.api.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss'],
})
export class FriendDetailComponent implements OnInit {
  friendId: string = '';
  friend: any = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private friendApiService: FriendApiService
  ) {
    this.friendId = this.route.snapshot.params['id'];
    this.friendApiService
      .findOne(this.friendId)
      .pipe(
        take(1),
        tap((data) => (this.friend = { ...data })),
        tap(() => console.log('friend', this.friend))
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
