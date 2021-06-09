import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { CardInputComponent } from './card-input/card-input.component';
import { CardComponent } from './card/card.component';
import { CreditCardHomeComponent } from './credit-card-home/credit-card-home.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { RestrictInputDirective } from './restrict-input.directive';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    CreditCardHomeComponent,
    CardFormComponent,
    CardInputComponent,
    RestrictInputDirective,
    CardComponent,
    TemplateFormComponent,
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreditCardModule {}
