import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
employees: any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];
  delete(index:number){
    // alert(index);
    this.employees.splice(index,1);
  }
  sort(){
    this.employees.sort((a:any,b:any)=>a.experience-b.experience);
  }

  role:string='';
  roleFilter(){
    // alert(this.role);
    this.employees=this.employees.filter((employee:any)=>employee.role==this.role);
  }

  filterData:string='';
  search(){
    // alert(this.filterData)
    this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.filterData));
  }

  bonus(){
    this.employees=this.employees.map((employee:any)=>{
     employee.package= employee.package+50000;
      return employee;
    });
  }
  totalCost(){
    let totalCost=this.employees.reduce((sum:any,employee:any)=>sum+employee.package,0);
    alert(totalCost);
  }


  empName:string='';
  empExp:number=0;
  empPack:number=0;
  empRole:string='';
  add(){
      let user={
      name:this.empName,
      experience:this.empExp,
      package:this.empPack,
      role:this.empRole
    };
    console.log(user);
    this.employees.unshift(user);
  }
}
