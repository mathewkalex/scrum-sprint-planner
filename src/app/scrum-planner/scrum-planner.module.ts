import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

import { ScrumPlannerRoutingModule } from './scrum-planner-routing.module';
import { StoriesPointComponent } from './stories-point/stories-point.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { AutoSprintComponent } from './auto-sprint/auto-sprint.component';


@NgModule({
  declarations: [
    StoriesPointComponent,
    StoryFormComponent,
    SprintCalculatorComponent,
    AutoSprintComponent
  ],
  imports: [
    CommonModule,
    ScrumPlannerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatListModule
  ]
})
export class ScrumPlannerModule { }
