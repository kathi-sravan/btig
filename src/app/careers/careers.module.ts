import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ],
  exports: [
    CareersComponent
  ]
})
export class CareersModule { }
