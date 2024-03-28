import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AddProjectsComponent } from './projects/add-projects/add-projects.component';
import { EditProjectsComponent } from './projects/edit-projects/edit-projects.component';
import { ViewProjectDetailsComponent } from './projects/view-project-details/view-project-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';


export const routes: Routes = [
     // main route - > index page - main page - first page - DASHBAORD
    { path: '', redirectTo: '/employees', pathMatch: 'full' },

    //employee
    { path: 'employees/list', component: EmployeeListComponent },
    { path: 'employees/:employeeId/view', component: EmployeeDetailsComponent },
    { path: 'employees/add', component: AddEmployeeComponent },
    { path: 'employees/edit', component: EditEmployeeComponent },
    { path: 'employees', redirectTo: '/employees/list', pathMatch: 'full' },
   
    // projects
    { path: 'projects/list', component: ProjectsListComponent },
    { path: 'projects/add', component: AddProjectsComponent },
    { path: 'projects/edit', component: EditProjectsComponent },
    { path: 'projects/:projectId/view', component: ViewProjectDetailsComponent },
    { path: 'projects', redirectTo: '/projects/list', pathMatch: 'full' },

];
