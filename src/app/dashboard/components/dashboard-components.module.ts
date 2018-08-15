import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BComponent, CComponent],
  exports: [BComponent, CComponent]
})
export class DashboardComponentsModule { }
