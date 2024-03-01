import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit{
  //initializing an empty array of messages
  messages: string[] = [];

  //inject MessageService
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    //the components subscribes to the messages$ observable from MessageService
    //Whena new message is emitted by MessageService, the function runs ->
    //the recieved message gets assigned to 'messages' property ^^
    this.messageService.messages$.subscribe(message => this.messages = message);
  }
}
