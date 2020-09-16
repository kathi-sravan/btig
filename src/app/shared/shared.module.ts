import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { ExpComponent } from './exp/exp.component';
import { HHeaderComponent } from './h-header/h-header.component';
import { MvComponent } from './mv/mv.component';
import { ProgressComponent } from './progress/progress.component';
import { RdComponent } from './rd/rd.component';
import { VisitComponent } from './visit/visit.component';
import { ApplyComponent } from './apply/apply.component';
import { BannerComponent } from './banner/banner.component';
import { ExploreComponent } from './explore/explore.component';
import { WeComponent } from './we/we.component';
import { WhyComponent } from './why/why.component';
import { FormComponent } from './form/form.component';
import { CbannerComponent } from './cbanner/cbanner.component';


@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    BrandsComponent,
    ExpComponent,
    HHeaderComponent,
    MvComponent,
    ProgressComponent,
    RdComponent,
    VisitComponent,
    ApplyComponent,
    BannerComponent,
    ExploreComponent,
    WeComponent,
    WhyComponent,
    FormComponent,
    CbannerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FooterComponent,
    BrandsComponent,
    ExpComponent,
    HHeaderComponent,
    MvComponent,
    ProgressComponent,
    RdComponent,
    VisitComponent,
    ApplyComponent,
    BannerComponent,
    ExploreComponent,
    WeComponent,
    WhyComponent,
    FormComponent,
    CbannerComponent
  ]
})
export class SharedModule { }
