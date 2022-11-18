import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getGiftImage } from 'src/app/@core/utils/gift.utils';

@Component({
  selector: 'app-gift-view',
  templateUrl: './gift-view.component.html',
  styleUrls: ['./gift-view.component.scss'],
})
export class GiftViewComponent implements OnInit {
  @Input() gift: any = null;
  @Input() isOwner = false;
  @Input() isGifter = false;

  @Output() modify = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() book = new EventEmitter<void>();
  @Output() unbook = new EventEmitter<void>();

  getGiftImage = getGiftImage;

  constructor() {}

  ngOnInit(): void {}

  onBooking(): void {
    this.book.emit();
  }

  onUnbooking(): void {
    this.unbook.emit();
  }

  onModify(): void {
    this.modify.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
