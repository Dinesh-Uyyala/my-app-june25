import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        FormsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') } // ✅ Mock implementation
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {} // ✅ Mock dialog data (if your component expects it)
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
