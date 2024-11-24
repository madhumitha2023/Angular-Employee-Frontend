import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService, private router:Router){ }
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    }, error=>{
      console.log(error);
    })
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  
}
