import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //initializing a new instance of 'Subject' (an array of strings[])
  messages: string[] = [];

  //this method emits the each message subject ([message] array)
  add(message: string) {
    this.messages.push(message);
  }
}
