import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnChanges,OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy{

  user:User={
    name:'dinesh',
    mobile:9849808937,
    email:'connect@dineshuyyala.com',
    age:29
  }
  timer:any;
  constructor(){
    console.log("constructor is running");
  }
  ngOnInit(): void {
    console.log("ngOnInit is running");
     this.timer=setInterval(()=>{
      console.log("Timer is running");
    },3000);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck is running")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is running")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is running")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is running")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is running")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy is running");
    clearInterval(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges running");
  }
}
