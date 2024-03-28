import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';

@Component({
  selector: 'app-edit-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-projects.component.html',
  styleUrl: './edit-projects.component.css'
})
export class EditProjectsComponent implements OnInit {

  projectId!: number;
  formattedStartDate!: Date;
  updatedProject!: Projects;
  form!: FormGroup;

  constructor(private projectService: ProjectsService, private router: Router, private activateRoute: ActivatedRoute, private customToasterService: CustomToasterService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.projectId = params['pId'];
    })

    this.projectService.get(this.projectId).subscribe((response: Projects) => {
      console.log("GET BY ID ", response)
      this.updatedProject = response;
    });

    this.form = new FormGroup({
      projectId: new FormControl(''),
      projectName: new FormControl('', [Validators.required]),
      projectDescription: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl(''),
      status: new FormControl('', [Validators.required])
    })
  }
  getDateFromTimeStamp(startDateTimeStamp: Date): string {
    let date = new Date(startDateTimeStamp);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }



  get formControl() {
    return this.form.controls;
  }
  onSubmit() {
    console.log(this.form.value);
    this.editProjects(this.form.value)

  }

  editProjects(project: Projects) {
    this.projectService.update(project).subscribe((response: any) => {
      console.log("UPDATED VALUE : ", response);
      this.customToasterService.info("Data has been Updated", "UPDATE");
      this.router.navigateByUrl('projects/list');
    })
  }


}
