import { Component } from '@angular/core';
import { projects } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {

  projects: projects[] = [];

  constructor(private projectService: ProjectsService) { }


  ngOnInit(): void {
    this.getAllProjects();
    console.log('PROJECT LIST :: ', this.projects);
  }

  getAllProjects() {
    this.projectService.getAll().subscribe((response: projects[]) => {
      this.projects = response;
    })
  }
}
