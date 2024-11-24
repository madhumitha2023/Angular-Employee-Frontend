# EmployeeFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## **Angular-Employee-Frontend README
 ## Employee Management Frontend - Angular**
# **Description**
This is the frontend of the Employee Management System, built using Angular 18. It communicates with the backend API (built with Spring Boot) to manage employee records. It includes components for viewing the employee list, creating new employees, updating employee details, and viewing individual employee information.

# Features
Employee List: View all employees and their details.
Create Employee: Add new employee records.
Update Employee: Update the details of an existing employee.
View Employee: View detailed information about an employee.
Bootstrap Styling: Styled using the Bootstrap framework.
Postman: Used to ensure the frontend API requests are correctly interacting with the backend API.
Technologies Used
Angular 18
TypeScript
RxJS
Bootstrap for styling
HttpClient for making HTTP requests
Postman for API testing
Postman Collection
You can use Postman to test the frontend API endpoints as well. 

Setup Instructions
Clone the repository:

Copy code
git clone https://github.com/yourusername/angular-employee-frontend.git
Navigate to the project directory:

Copy code
cd angular-employee-frontend
Install the dependencies:

Copy code
npm install
Configure the backend API URL in src/app/employee.service.ts:

typescript
Copy code
private baseURL = "http://localhost:8080/api/v1/employees";
Run the Angular application:

Copy code
ng serve
Access the frontend via:

http://localhost:4200

