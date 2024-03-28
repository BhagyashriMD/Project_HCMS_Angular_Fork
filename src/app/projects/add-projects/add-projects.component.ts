import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { Router, RouterModule } from '@angular/router';
import { Projects } from '../projects';
import { CustomToasterService } from '../../custom-toaster/custom-toaster-service.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-add-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,ToastrModule],
  templateUrl: './add-projects.component.html',
  styleUrl: './add-projects.component.css'
})
export class AddProjectsComponent implements OnInit {

  form!: FormGroup;

  constructor(private projectService: ProjectsService, private router: Router,private customToasterService:CustomToasterService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl('', [Validators.required]),
      projectDescription: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl(),
      status: new FormControl('', [Validators.required])
    })
  }

  get formControl() {
    return this.form.controls;
  }
  onSubmit() {
    console.log(this.form.value);
    this.addProjects(this.form.value)

  }

  addProjects(project: Projects) {
    this.projectService.create(project).subscribe((response: any) => {
      this.customToasterService.success("Project Created Successfully...","SUCCESS");
      this.router.navigateByUrl('projects/list');
    })
  }

}
