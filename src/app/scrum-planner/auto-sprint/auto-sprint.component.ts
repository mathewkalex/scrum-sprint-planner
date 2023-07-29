import { Component, OnInit } from '@angular/core';
import { SrumService } from 'src/app/shared/service/srum.service';

@Component({
  selector: 'app-auto-sprint',
  templateUrl: './auto-sprint.component.html',
  styleUrls: ['./auto-sprint.component.scss']
})
export class AutoSprintComponent implements OnInit {
  autoSelectedStories: any = [];
  constructor(
    private _scrum: SrumService
  ) {
    this.autoSelectedStories = _scrum.autoSelectedData;
    _scrum.autoSelectedData = [];
   }

  ngOnInit():void {

  }
}
