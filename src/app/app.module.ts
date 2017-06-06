import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { SkillComponent } from './skill/skill.component';
import { UserSkillComponent } from './user-skill/user-skill.component';
import { RatingComponent } from './rating/rating.component';


import { UserService } from './user.service';
import { SkillService } from './skill.service';
import { CategoryService } from './category.service';

import { RouterModule, Routes } from '@angular/router';

import { RatingService } from "app/rating.service";

import { AppRoutingModule } from './app-routing.module';
import { HolidayComponent } from './holiday/holiday.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { HolidayService } from "app/holiday.service";
import { DesignationComponent } from './designation/designation.component';
import { LeavestatusService } from "app/leavestatus.service";
import { LeavetypeService } from "app/leavetype.service";
import { DepartmentService } from "app/department.service";
import { DesignationService } from "app/designation.service";
import { TrainingComponent } from './training/training.component';
import { TrainingService } from "app/training.service";
import { TrainersComponent } from './trainers/trainers.component';
import { TrainersService } from "app/trainers.service";
import { BatchComponent } from './batch/batch.component';
import { BatchService } from "app/batch.service";
import { CollegeComponent } from './college/college.component';
import { CollegeService } from "app/college.service";
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsService } from "app/tickets.service";
import { EmployeeService } from "app/employee.service";



@NgModule({
  
  declarations: [
    AppComponent,
    UserComponent,
    CategoryComponent,
    SkillComponent,
    UserSkillComponent,
    RatingComponent,
    HolidayComponent,
    LeavetypeComponent,
    LeavestatusComponent,
    EmployeeComponent,
    DepartmentComponent,
    DesignationComponent,
    TrainingComponent,
    TrainersComponent,
    BatchComponent,
    CollegeComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,HttpModule,AppRoutingModule
  ],
  exports : [ 
      RouterModule
  ],
  providers: [UserService,SkillService,CategoryService,RatingService,HolidayService,LeavetypeService,LeavestatusService,EmployeeService,
  DesignationService, DepartmentService,TrainingService,TrainersService,BatchService,CollegeService,TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
