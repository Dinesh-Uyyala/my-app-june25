import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle:any={};
  id:number=0;
  constructor(private _activatedRoute:ActivatedRoute, private _vehiclesService:VehiclesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        alert("unable to get ID");
      }
    )

    _vehiclesService.getVehicle(this.id).subscribe(
        (data:any)=>{
        console.log(data);
        this.vehicle=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
