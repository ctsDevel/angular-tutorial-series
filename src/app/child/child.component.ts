import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string = 'Message from child'
  @Input() childMessage: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit('Hello from your child')
  }

}
