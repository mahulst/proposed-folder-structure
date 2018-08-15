import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { DashboardComponentsModule } from '../components/dashboard-components.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardComponentsModule
  ],
  declarations: [FiltersComponent],
  exports: [FiltersComponent]
})
export class FiltersModule { }
