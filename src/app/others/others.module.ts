import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OthersHomeComponent } from './others-home/others-home.component';
import { OthersRoutingModule } from './others-routing.module';
import { ClassDirective } from './pages/class.directive';
import { PagesComponent } from './pages/pages.component';
import { TimesDirective } from './pages/times.directive';

@NgModule({
  declarations: [
    OthersHomeComponent,
    PagesComponent,
    ClassDirective,
    TimesDirective,
  ],
  imports: [CommonModule, OthersRoutingModule],
})
export class OthersModule {}
