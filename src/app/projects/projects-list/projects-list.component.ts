import { Component } from '@angular/core';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';


@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {


  projects: Projects[] = [];

  constructor(private projectService: ProjectsService, private router: Router,private customToasterService:CustomToasterService) { }


  ngOnInit(): void {
    this.getAllProjects();
    console.log('PROJECTS  :: ', this.projects);
  }

  getAllProjects() {
    this.projectService.getAll().subscribe((response: Projects[]) => {
      this.projects = response;
    })
  }

  refreshPage(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  deleteProject(projectId: number) {
    this.projectService.delete(projectId).subscribe(response => {
      console.log('PROJECTS  :: ', this.projects);
      this.customToasterService.warning(`Delete Project with ID :'${projectId}`,"DELETED");
      this.refreshPage('/projects/list');
    })
  }


  editProject(projectId: number): number {
    this.router.navigate(['/projects/edit', { pId: projectId }]);
    return projectId;
  }
}
