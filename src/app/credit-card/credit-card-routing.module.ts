import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardHomeComponent } from './credit-card-home/credit-card-home.component';

const routes: Routes = [{ path: '', component: CreditCardHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardRoutingModule {}
