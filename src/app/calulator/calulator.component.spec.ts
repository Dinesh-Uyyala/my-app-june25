import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalulatorComponent } from './calulator.component';

describe('CalulatorComponent', () => {
  let component: CalulatorComponent;
  let fixture: ComponentFixture<CalulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalulatorComponent ],
      imports: [ FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    component.num1 = 5;
    component.num2 = 10;
    component.add();
    expect(component.result).toBe(15);
  });

  it('should subtract two numbers', () => {
    component.num1 = 20;
    component.num2 = 5;
    component.sub();
    expect(component.result).toBe(15);
  });

  it('should multiply two numbers', () => {
    component.num1 = 4;
    component.num2 = 3;
    component.mul();
    expect(component.result).toBe(12);
  });

  it('should divide two numbers', () => {
    component.num1 = 10;
    component.num2 = 2;
    component.div();
    expect(component.result).toBe(5);
  });

  it('should handle division by zero', () => {
    component.num1 = 10;
    component.num2 = 0;
    component.div();
    expect(component.result).toBe(Infinity);  // or handle as custom logic
  });
});
