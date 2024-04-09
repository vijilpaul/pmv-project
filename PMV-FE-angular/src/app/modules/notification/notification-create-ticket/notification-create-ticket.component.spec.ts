import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCreateTicketComponent } from './notification-create-ticket.component';

describe('NotificationCreateTicketComponent', () => {
  let component: NotificationCreateTicketComponent;
  let fixture: ComponentFixture<NotificationCreateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCreateTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCreateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
