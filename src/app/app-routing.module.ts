import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';
import { AutoLoginGuard } from './@core/guards/auto-login.guard';
import { LayoutComponent } from './@ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        canLoad: [AutoLoginGuard],
        loadChildren: () =>
          import('./@pages/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'dashboard',
            canLoad: [AuthGuard],
            loadChildren: () =>
              import('./@pages/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'personal',
            canLoad: [AuthGuard],
            loadChildren: () =>
              import('./@pages/personal/personal.module').then(
                (m) => m.PersonalModule
              ),
          },
          {
            path: 'friends',
            canLoad: [AuthGuard],
            loadChildren: () =>
              import('./@pages/friends/friends.module').then(
                (m) => m.FriendsModule
              ),
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
