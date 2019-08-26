import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { StudTableComponent } from './stud-table/stud-table.component';
import { FindStudentsComponent } from './find-students/find-students.component';
import { MaterialModule } from 'src/app/material.module';
import { PaginationService } from './pagination/pagination.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CompHttpService } from './comp-http.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StudTableService } from './stud-table/stud-table.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ShowUpdatUserComponent } from './show-updat-user/show-updat-user.component';

@NgModule({
  declarations: [
    PaginationComponent,
    StudTableComponent,
    FindStudentsComponent,
    RegisterFormComponent,
    ShowUpdatUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CompHttpService,
    PaginationService,
    StudTableService
  ],
  exports: [
    PaginationComponent,
    StudTableComponent,
    FindStudentsComponent,
    RegisterFormComponent,
    ShowUpdatUserComponent
  ],
})
export class ComponentsModule { }
