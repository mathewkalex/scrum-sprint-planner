import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SrumService } from 'src/app/shared/service/srum.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent implements OnInit {
  sprintForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _scrum: SrumService,
    private _snack: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.sprintForm = new FormGroup({
      sprint_point: new FormControl()
    });
  }

  autoSelect() {
    const data = this._scrum.autoSelectStories(this.sprintForm.value.sprint_point);
    if(data.length) {
      this._scrum.autoSelectedData = data;
      this._router.navigate(['auto-sprint'])
    }else {
      this._snack.open('No Stories', 'Ok', { duration:2000, horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition, });
    }
  }
}
