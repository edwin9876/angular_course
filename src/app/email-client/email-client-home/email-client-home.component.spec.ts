import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailClientHomeComponent } from './email-client-home.component';

describe('EmailClientHomeComponent', () => {
  let component: EmailClientHomeComponent;
  let fixture: ComponentFixture<EmailClientHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailClientHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailClientHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
