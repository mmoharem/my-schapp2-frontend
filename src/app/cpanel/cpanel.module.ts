import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from "@swimlane/ngx-charts";

// Redux
import { NgRedux, NgReduxModule, DevToolsExtension } from "@angular-redux/store";
import { IAppState, rootReducer, INIT_STATE } from './shared/store/store';

import { CpanelComponent } from './cpanel.component';
import { LayoutComponent } from './layout/layout.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { AppPagesComponent } from './layout/app-pages/app-pages.component';
import { AppSidenavComponent } from './layout/app-sidenav/app-sidenav.component';
import { SidenavHeaderComponent } from './layout/app-sidenav/sidenav-header/sidenav-header.component';
import { AppTopnavComponent } from './layout/app-topnav/app-topnav.component';
import { LinksComponent } from './layout/app-sidenav/links/links.component';
import { StudentsComponent } from './layout/app-pages/students/students.component';
import { StudTablesComponent } from './layout/app-pages/students/stud-main/stud-tables/stud-tables.component';
import { TestComponent } from './layout/app-pages/test/test.component';
import { TeachersComponent } from './layout/app-pages/teachers/teachers.component';
import { TeachSignupComponent } from './layout/app-pages/teachers/teach-signup/teach-signup.component';
import { SchoolComponent } from './layout/app-pages/school/school.component';
import { SchGradeComponent } from './layout/app-pages/school/sch-grade/sch-grade.component';
import { AddGradeComponent } from './layout/app-pages/school/sch-grade/add-grade/add-grade.component';

//
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FullCalendarModule } from "@fullcalendar/angular";
import { OnClickDirective } from './shared/directive/on-click.directive';
import { FeesComponent } from './layout/app-pages/school/fees/fees.component';
import { AddFeesComponent } from './layout/app-pages/school/fees/add-fees/add-fees.component';
import { ShowFeesComponent } from './layout/app-pages/school/fees/show-fees/show-fees.component';
import { PaymentsComponent } from './layout/app-pages/students/payments/payments.component';
import { AddStudentComponent } from './layout/app-pages/students/stud-main/add-student/add-student.component';
import { UpdateStudentComponent } from './layout/app-pages/students/update-student/update-student.component';
import { PdfPrintComponent } from './pdf-print/pdf-print.component';
import { PrintStudentsAllComponent } from './pdf-print/print-students-all/print-students-all.component';
import { StudMainComponent } from './layout/app-pages/students/stud-main/stud-main.component';
import { FindStudComponent } from './layout/app-pages/students/stud-main/find-stud/find-stud.component';
import { ComponentsModule } from './shared/components/components.module';
import { TestUpdateComponent } from './layout/app-pages/students/test-update/test-update.component';
import { TeachersMainComponent } from './layout/app-pages/teachers/teachers-main/teachers-main.component';
import { AddTeachComponent } from './layout/app-pages/teachers/teachers-main/add-teach/add-teach.component';
import { FindTeachComponent } from './layout/app-pages/teachers/teachers-main/find-teach/find-teach.component';
import { ShowallTeachComponent } from './layout/app-pages/teachers/teachers-main/showall-teach/showall-teach.component';
import { EmployeeComponent } from './layout/app-pages/employee/employee.component';
import { EmployeeMainComponent } from './layout/app-pages/employee/employee-main/employee-main.component';
import { ShowEmployComponent } from './layout/app-pages/employee/employee-main/show-employ/show-employ.component';
import { AddEmployComponent } from './layout/app-pages/employee/employee-main/add-employ/add-employ.component';
import { UpdateEmployComponent } from './layout/app-pages/employee/update-employ/update-employ.component';
import { UpdateTeachComponent } from './layout/app-pages/teachers/update-teach/update-teach.component';
import { FindEmployComponent } from './layout/app-pages/employee/employee-main/find-employ/find-employ.component';
import { Calendar1TestComponent } from './layout/app-pages/test/calendar1-test/calendar1-test.component';
import { Calendar2TestComponent } from './layout/app-pages/test/calendar2-test/calendar2-test.component';
import { StudAttendComponent } from './layout/app-pages/students/stud-attend/stud-attend.component';
import { HomeChartsComponent } from './public/home/home-charts/home-charts.component';
import { Hchart1Component } from './public/home/home-charts/hchart1/hchart1.component';
import { ParentsComponent } from './layout/app-pages/parents/parents.component';
import { AddParentsComponent } from './layout/app-pages/parents/add-parents/add-parents.component';
// import { PaginationModule } from './shared/components/pagination/pagination.module';
// import { FindStudentsComponent } from './shared/components/find-students/find-students.component';
// import { StudTableComponent } from './shared/components/stud-table/stud-table.component';


@NgModule({
  declarations: [
    CpanelComponent,
    LayoutComponent,
    PublicComponent,
    SecureComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AppPagesComponent,
    AppSidenavComponent,
    SidenavHeaderComponent,
    AppTopnavComponent,
    LinksComponent,
    StudentsComponent,
    StudTablesComponent,
    TestComponent,
    TeachersComponent,
    TeachSignupComponent,
    SchoolComponent,
    SchGradeComponent,
    AddGradeComponent,
    FeesComponent,

    AddFeesComponent,

    ShowFeesComponent,

    PaymentsComponent,

    AddStudentComponent,

    UpdateStudentComponent,

    //Directives
    OnClickDirective,

    PdfPrintComponent,

    PrintStudentsAllComponent,

    StudMainComponent,

    FindStudComponent,

    TestUpdateComponent,

    TeachersMainComponent,

    AddTeachComponent,

    FindTeachComponent,

    ShowallTeachComponent,

    EmployeeComponent,

    EmployeeMainComponent,

    ShowEmployComponent,

    AddEmployComponent,

    UpdateEmployComponent,

    UpdateTeachComponent,

    FindEmployComponent,

    Calendar1TestComponent,

    Calendar2TestComponent,

    StudAttendComponent,

    HomeChartsComponent,

    Hchart1Component,

    ParentsComponent,

    AddParentsComponent,

    // FindStudentsComponent,

    // StudTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FullCalendarModule,
    // PaginationModule,
    ComponentsModule,
    NgxChartsModule,
    NgReduxModule
  ],
  exports: [
    CpanelComponent
  ]
})
export class CpanelModule {
  constructor(devTools: DevToolsExtension,
              ngRedux: NgRedux<IAppState>)
  {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    // ngRedux.configureStore(rooReducer, { counter: 0 });
    ngRedux.configureStore(rootReducer, INIT_STATE, [], enhancers);
  }
  // {
  //   ngRedux.configureStore(rooReducer, INIT_STATE);
  // }
}
