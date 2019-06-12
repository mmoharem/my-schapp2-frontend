import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PaginationComponent } from './pagination.component';
import { PaginationService } from './pagination.service';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    // PaginationComponent
  ],

  imports: [
    CommonModule,
    MaterialModule
  ],

  providers: [
    PaginationService
  ],

  exports: [
    // PaginationComponent
  ]
})
export class PaginationModule { }
