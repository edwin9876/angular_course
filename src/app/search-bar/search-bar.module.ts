import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarHomeComponent } from './search-bar-home/search-bar-home.component';
import { SearchBarRoutingModule } from './search-bar-routing.module';

@NgModule({
  declarations: [SearchBarHomeComponent, PageListComponent, FormComponent],
  imports: [CommonModule, SearchBarRoutingModule],
})
export class SearchBarModule {}
