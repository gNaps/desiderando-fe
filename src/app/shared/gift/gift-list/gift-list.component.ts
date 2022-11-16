import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss'],
})
export class GiftListComponent implements OnInit {
  gifts: any = [];

  constructor() {}

  ngOnInit(): void {
    this.gifts = [
      { id: 1, name: 'desiderio1' },
      { id: 2, name: 'desiderio2' },
    ];
  }
}
