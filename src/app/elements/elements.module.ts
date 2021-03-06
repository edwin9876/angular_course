import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, SegmentComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
})
export class ElementsModule {}
