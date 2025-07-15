import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent } from './material.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialComponent],
      imports: [MatDialogModule,MatDividerModule,MatCardModule,MatIconModule,MatBadgeModule],
      providers: [
        {
          provide: MatBottomSheet,
          useValue: {
            open: () => {}  // mock method if used
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
