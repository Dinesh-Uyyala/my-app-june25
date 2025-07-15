import { Component } from '@angular/core';

@Component({
  selector: 'app-calulator',
  templateUrl: './calulator.component.html',
  styleUrls: ['./calulator.component.css']
})
export class CalulatorComponent {
  num1:number=0;
  num2:number=0;
  result:number=0;
  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2;
    console.log(this.result);
  }
sub() {
  this.result = this.num1 - this.num2;
}

mul() {
  this.result = this.num1 * this.num2;
}

div() {
  this.result = this.num2 !== 0 ? this.num1 / this.num2 : Infinity;
}

}
