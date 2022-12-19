import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  DxCheckBoxModule,
  DxPopupModule,
  DxRadioGroupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxSliderModule,
  DxTagBoxModule
} from 'devextreme-angular';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { NgPipesModule } from 'ngx-pipes';

import { FunctionCallPipe } from './pipes/functionCall.pipe';

@NgModule({
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxTagBoxModule,
    DxSliderModule,
    DxPopupModule,
    DxScrollViewModule,
    DxRadioGroupModule,
    NgPipesModule,
    ToastrModule,
    VirtualScrollerModule,
  ],
  declarations: [
    FunctionCallPipe,
  ],
  exports: [
    RouterModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxTagBoxModule,
    DxSliderModule,
    DxPopupModule,
    DxScrollViewModule,
    DxRadioGroupModule,
    NgPipesModule,
    ToastrModule,
    VirtualScrollerModule,
    FunctionCallPipe,
  ],
  providers: [
    ToastrService,
  ]
})
export class SharedModule { }
