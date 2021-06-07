import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarHomeComponent } from './search-bar-home/search-bar-home.component';

const routes: Routes = [{ path: '', component: SearchBarHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBarRoutingModule {}
