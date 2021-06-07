import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { CreditCardHomeComponent } from './credit-card-home/credit-card-home.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CardInputComponent } from './card-input/card-input.component';

@NgModule({
  declarations: [CreditCardHomeComponent, CardFormComponent, CardInputComponent],
  imports: [CommonModule, CreditCardRoutingModule, ReactiveFormsModule],
})
export class CreditCardModule {}
