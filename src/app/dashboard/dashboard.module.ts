import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardComponentsModule } from './components/dashboard-components.module';
import { FiltersModule } from './filters/filters.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardComponentsModule,
    FiltersModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
