import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
//  @Input() a:number=0;
//  @Output() clickEvent:EventEmitter<number>=new EventEmitter();
//  click(){
//   this.clickEvent.emit(20);
//  }

name:string=''
@Output() sendEvent:EventEmitter<string>=new EventEmitter();
send(){
  this.sendEvent.emit(this.name);
}
}
