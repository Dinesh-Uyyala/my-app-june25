import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  states:string[]=['Andhra Pradesh','Telangana','Tamilnadu','Kerala','Karnataka'];
  ages:number[]=[10,20,45,87,45];
  
  // accessIdentifier variableName:dataType=initialValue;
  products:any[]=[
    {productName:'TV',price:15000,rating:1.8},
    {productName:'AC',price:35000,rating:4.2},
    {productName:'Parker Pen',price:500,rating:4.8},
    {productName:'Watch',price:1500,rating:3.5},
    {productName:'Mobile',price:18000,rating:2.3},
    {productName:'Laptop',price:150000,rating:3.9},
  ]




}
