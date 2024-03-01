import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //initializing a new instance of 'Subject' (an array of strings[])
  private messageSubject = new Subject<string[]>();
  //Observable property (messages$) = calling a methods on the message subject
  //asObservable() - provided by 'Subject'; converts it to an observable
  messages$ = this.messageSubject.asObservable();

  //this method emits the each message subject ([message] array)
  add(message: string) {
    this.messageSubject.next([message]);
  }
}
