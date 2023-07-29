import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoSprintComponent } from './auto-sprint/auto-sprint.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { StoriesPointComponent } from './stories-point/stories-point.component';
import { StoryFormComponent } from './story-form/story-form.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesPointComponent
  },
  {
    path: 'add-story',
    component: StoryFormComponent
  },
  {
    path: 'sprint-calculator',
    component: SprintCalculatorComponent
  },
  {
    path: 'auto-sprint',
    component: AutoSprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumPlannerRoutingModule { }
