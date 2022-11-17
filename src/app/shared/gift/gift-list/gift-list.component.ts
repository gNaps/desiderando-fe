import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getGiftImage } from 'src/app/@core/utils/gift.utils';
@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss'],
})
export class GiftListComponent implements OnInit {
  @Input() gifts: any = [];
  @Input() context: any = 'DASHBOARD';

  @Output() openFriendDetail = new EventEmitter<any>();
  @Output() openGiftDetail = new EventEmitter<any>();

  getGiftImage = getGiftImage;

  constructor() {}

  ngOnInit(): void {}

  onOpenFriendDetail(gift: any) {
    this.openFriendDetail.emit(gift);
  }

  onOpenGiftDetail(gift: any) {
    this.openGiftDetail.emit(gift);
  }
}
