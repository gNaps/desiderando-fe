import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { GiftListComponent } from './gift/gift-list/gift-list.component';
import { GiftViewComponent } from './gift/gift-view/gift-view.component';
import { GiftEditComponent } from './gift/gift-edit/gift-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { FriendDetailComponent } from './friend/friend-detail/friend-detail.component';

@NgModule({
  declarations: [
    GiftListComponent,
    GiftViewComponent,
    GiftEditComponent,
    ImageUploaderComponent,
    FriendListComponent,
    FriendDetailComponent,
  ],
  imports: [
    CommonModule,
    DataViewModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MenubarModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    CardModule,
    ToastModule,
    MenuModule,
  ],
  exports: [
    GiftListComponent,
    GiftViewComponent,
    GiftEditComponent,
    MenubarModule,
    ButtonModule,
    InputTextareaModule,
    InputNumberModule,
    ImageUploaderComponent,
    CalendarModule,
    CardModule,
    ToastModule,
    MenuModule,
    FriendDetailComponent,
    FriendListComponent,
  ],
  providers: [MessageService],
})
export class SharedModule {}
