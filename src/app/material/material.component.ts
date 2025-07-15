import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private _bottomSheet: MatBottomSheet,private dialog:MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(VehiclesComponent);
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VehiclesComponent, {
      width: '1050px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
