import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { GiftListComponent } from './gift/gift-list/gift-list.component';
import { GiftViewComponent } from './gift/gift-view/gift-view.component';
import { GiftEditComponent } from './gift/gift-edit/gift-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GiftListComponent, GiftViewComponent, GiftEditComponent],
  imports: [
    CommonModule,
    DataViewModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [GiftListComponent, GiftViewComponent, GiftEditComponent],
})
export class SharedModule {}
