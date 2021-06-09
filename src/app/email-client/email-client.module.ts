import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { EmailClientHomeComponent } from './email-client-home/email-client-home.component';
import { EmailClientRoutingModule } from './email-client-routing.module';

@NgModule({
  declarations: [EmailClientHomeComponent],
  imports: [CommonModule, EmailClientRoutingModule, AuthModule],
})
export class EmailClientModule {}
