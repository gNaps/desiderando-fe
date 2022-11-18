import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Sign out',
      icon: 'pi pi-sign-out',
      command: () => {
        this.onSignOut();
      },
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onOpenNewGift(): void {
    this.router.navigateByUrl('/personal/new');
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['']);
  }
}
