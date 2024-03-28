import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Projects } from '../projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-project-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './view-project-details.component.html',
  styleUrl: './view-project-details.component.css'
})
export class ViewProjectDetailsComponent implements OnInit {


  projectId!: number;
  project!: Projects;

  constructor(private projectService: ProjectsService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activateRoute.snapshot.params['projectId'];
    this.projectService.get(this.projectId).subscribe((response: Projects) => {
      console.log("GET BY ID :: VIEW COMPONENT ", response)
      this.project = response;
    });
  }

}
