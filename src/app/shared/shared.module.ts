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

@NgModule({
  declarations: [
    GiftListComponent,
    GiftViewComponent,
    GiftEditComponent,
    ImageUploaderComponent,
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
  ],
  providers: [MessageService],
})
export class SharedModule {}
