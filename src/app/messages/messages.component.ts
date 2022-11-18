import { Component } from '@angular/core';
import {MessagesService } from '../messages.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {}
  // messagesService property must be public because it will be bound to the template

}
