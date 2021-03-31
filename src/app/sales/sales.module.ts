import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';

import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    BasicComponent,
    OrderComponent,
    FlyPipe,
    OrderPipe,
    UpperPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    BasicComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
