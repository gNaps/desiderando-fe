import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './@ui/layout/layout.component';
import { TopbarComponent } from './@ui/topbar/topbar.component';
import { FooterComponent } from './@ui/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    NgProgressHttpModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
