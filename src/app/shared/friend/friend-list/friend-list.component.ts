import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  @Input() friends: any[] = [];
  @Output() openDetail = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onOpenDetailFriend(friendId: string) {
    this.openDetail.emit(friendId);
  }
}
