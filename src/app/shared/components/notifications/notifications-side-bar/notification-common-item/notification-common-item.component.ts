import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

import {NotificationType} from '../../events.model';
import {INotificationComponent, NotificationItem, NotificationMessage} from '../../notifications.model';

@Component({
  selector: 'dr-notification-item',
  templateUrl: './notification-common-item.component.html',
  styleUrls: ['./notification-common-item.component.scss'],
})
export class NotificationCommonItemComponent implements OnInit, INotificationComponent {

  showCloseButton = false;
  notificationType = NotificationType;
  messageItem: NotificationMessage = new NotificationMessage();

  @Input('notificationItem') notificationItem: NotificationItem;
  @Output() closeEvent = new EventEmitter<NotificationItem>();

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showCloseButton = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showCloseButton = false;
  }

  ngOnInit() {
    this.messageItem = this.notificationItem.componentData;
  }

  onCloseMessage() {
    this.closeEvent.emit(this.notificationItem);
  }
}
