import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onOpenNewGift(): void {
    this.router.navigateByUrl('/personal/new');
  }
}
