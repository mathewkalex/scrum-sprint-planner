import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SrumService } from 'src/app/shared/service/srum.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent implements OnInit {
  storyForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _scrum: SrumService,
    private _snack: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.storyForm = new FormGroup({
      story_name: new FormControl(),
      story_point: new FormControl(null,Validators.min(1))
    });
  }

  addStory() {
    const result = this._scrum.writeStory(this.storyForm.value);
    console.log(result);
    if (result) {
      this._snack.open('New Story Created', 'Ok', { horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition, });
      this._router.navigate(['']);
    } else {
      this._snack.open('Duplicate Story', 'Ok', { duration:2000, horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition, });
    }
  }
}
