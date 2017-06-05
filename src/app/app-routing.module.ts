import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { SkillComponent } from './skill/skill.component';
import { UserSkillComponent } from './user-skill/user-skill.component';
import { RatingComponent } from './rating/rating.component';
import { HolidayComponent } from "app/holiday/holiday.component";
import { DepartmentComponent } from "app/department/department.component";
import { EmployeeComponent } from "app/employee/employee.component";
import { DesignationComponent } from "app/designation/designation.component";
import { LeavetypeComponent } from "app/leavetype/leavetype.component";
import { LeavestatusComponent } from "app/leavestatus/leavestatus.component";
import { TrainingComponent } from "./training/training.component";
import { TrainersComponent } from "./trainers/trainers.component";
import { BatchComponent } from "./batch/batch.component";
import { CollegeComponent } from "./college/college.component";
import { TicketsComponent } from "./tickets/tickets.component";

const appRoutes: Routes = [
  { path: 'skills', component: SkillComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'ratings', component: RatingComponent },
  { path: 'holidays', component: HolidayComponent },

  { path: 'employees', component: EmployeeComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'designations', component: DesignationComponent },

  { path: 'leavetypes', component: LeavetypeComponent },
  { path: 'leavestatus', component: LeavestatusComponent },
  { path: 'trainings', component: TrainingComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'batches', component: BatchComponent },
  { path: 'colleges', component: CollegeComponent },
  { path: 'tickets', component: TicketsComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
