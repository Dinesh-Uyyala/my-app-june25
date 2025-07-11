import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  user:User={
    name:'dinesh',
    mobile:9849808937,
    email:'connect@dineshuyyala.com',
    age:29
  }
}
