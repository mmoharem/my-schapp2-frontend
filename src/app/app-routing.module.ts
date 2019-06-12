import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './cpanel/secure/secure.component';
import { HomeComponent } from './cpanel/public/home/home.component';
import { LoginComponent } from './cpanel/public/login/login.component';
import { PublicComponent } from './cpanel/public/public.component';
import { SignupComponent } from './cpanel/public/signup/signup.component';
import { AppPagesComponent } from './cpanel/layout/app-pages/app-pages.component';
import { StudentsComponent } from './cpanel/layout/app-pages/students/students.component';
import { TestComponent } from './cpanel/layout/app-pages/test/test.component';
import { SchoolComponent } from './cpanel/layout/app-pages/school/school.component';
import { SchGradeComponent } from './cpanel/layout/app-pages/school/sch-grade/sch-grade.component';
import { FeesComponent } from './cpanel/layout/app-pages/school/fees/fees.component';
import { PaymentsComponent } from './cpanel/layout/app-pages/students/payments/payments.component';
import { UpdateStudentComponent } from './cpanel/layout/app-pages/students/update-student/update-student.component';
import { PdfPrintComponent } from './cpanel/pdf-print/pdf-print.component';
import { PrintStudentsAllComponent } from './cpanel/pdf-print/print-students-all/print-students-all.component';
import { StudMainComponent } from './cpanel/layout/app-pages/students/stud-main/stud-main.component';
import { StudTablesComponent } from './cpanel/layout/app-pages/students/stud-main/stud-tables/stud-tables.component';
import { AddStudentComponent } from './cpanel/layout/app-pages/students/stud-main/add-student/add-student.component';
import { FindStudComponent } from './cpanel/layout/app-pages/students/stud-main/find-stud/find-stud.component';
import { TeachersComponent } from './cpanel/layout/app-pages/teachers/teachers.component';
import { TestUpdateComponent } from './cpanel/layout/app-pages/students/test-update/test-update.component';
import { TeachersMainComponent } from './cpanel/layout/app-pages/teachers/teachers-main/teachers-main.component';
import { ShowallTeachComponent } from './cpanel/layout/app-pages/teachers/teachers-main/showall-teach/showall-teach.component';
import { AddTeachComponent } from './cpanel/layout/app-pages/teachers/teachers-main/add-teach/add-teach.component';
import { UpdateTeachComponent } from './cpanel/layout/app-pages/teachers/update-teach/update-teach.component';
import { EmployeeComponent } from './cpanel/layout/app-pages/employee/employee.component';
import { EmployeeMainComponent } from './cpanel/layout/app-pages/employee/employee-main/employee-main.component';
import { ShowEmployComponent } from './cpanel/layout/app-pages/employee/employee-main/show-employ/show-employ.component';
import { AddEmployComponent } from './cpanel/layout/app-pages/employee/employee-main/add-employ/add-employ.component';
import { UpdateEmployComponent } from './cpanel/layout/app-pages/employee/update-employ/update-employ.component';
import { FindEmployComponent } from './cpanel/layout/app-pages/employee/employee-main/find-employ/find-employ.component';
import { FindTeachComponent } from './cpanel/layout/app-pages/teachers/teachers-main/find-teach/find-teach.component';
import { StudAttendComponent } from './cpanel/layout/app-pages/students/stud-attend/stud-attend.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ],
  },

  //level-1
  {
    path: 'secure', component: SecureComponent
  },

  //App-Pages
  {
    path: '',
    component: AppPagesComponent,
    children: [

      //School
      {
        path: 'school',
        component: SchoolComponent,
        children:
        [
          {path: 'grade', component: SchGradeComponent},
          {path: 'fees', component: FeesComponent},
        ]
      },

      //Students
      {
        path: 'students',
        component: StudentsComponent,
        children:
        [
          {
            path: '',
            component: StudMainComponent,
            children: [
              {path: 'showall', component: StudTablesComponent},
              {path: 'addstudent', component: AddStudentComponent},
              {path: 'findstudent', component: FindStudComponent},
              {path: 'testupdate/:student', component: TestUpdateComponent},
              {path: 'studattendance/:student', component: StudAttendComponent}
            ]
          },

          {path: 'payments', component: PaymentsComponent},
          {path: 'update', component: UpdateStudentComponent}
        ]
      },

      //Teachers
      {
        path: 'teachers',
        component: TeachersComponent,
        children:
        [
          {
            path: '',
            component: TeachersMainComponent,
            children: [
              {path: 'showteachers', component: ShowallTeachComponent},
              {path: 'addteacher', component: AddTeachComponent},
              {path: 'findteacher', component: FindTeachComponent},
              {path: 'updateteacher', component: UpdateTeachComponent}
            ]
          },
        ]
      },

      //Teachers
      {
        path: 'employee',
        component: EmployeeComponent,
        children:
        [
          {
            path: '',
            component: EmployeeMainComponent,
            children: [
              {path: 'showemployee', component: ShowEmployComponent},
              {path: 'addemployee', component: AddEmployComponent},
              {path: 'findemployee', component: FindEmployComponent},
              {path: 'updateemployee', component: UpdateEmployComponent}
            ]
          },
        ]
      },

      //Test
      {
        path: 'test', component: TestComponent
      },
    ]
  },

  //Print
  {
    path: 'print',
    outlet: 'print',
    component: PdfPrintComponent,
    // children: [
    //   {path: 'printStudAll', component: PrintStudentsAllComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
