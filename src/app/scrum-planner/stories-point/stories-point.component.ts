import { Component, OnInit, Input } from '@angular/core';
import { SrumService } from 'src/app/shared/service/srum.service';

@Component({
  selector: 'app-stories-point',
  templateUrl: './stories-point.component.html',
  styleUrls: ['./stories-point.component.scss']
})
export class StoriesPointComponent implements OnInit {
  public stories!:any;
  private deleteIndex:any = [];
  @Input() public deleteOption: boolean = false;
  constructor(
    private _scrum: SrumService
  ) {
    this.stories = _scrum.stories;
   }

  ngOnInit(): void {

  }

  clearAllStories():void {
    this._scrum.clearAllStories();
    this.stories = this._scrum.stories;
  }

  updateDelete(index:number) {
    this.checkStatus(index) ? this.deleteIndex.splice(this.deleteIndex.indexOf(index),1):this.deleteIndex.push(index);
    console.log(this.deleteIndex);
  }

  checkStatus(index:number): boolean {
    return this.deleteIndex.includes(index)
  }

  selectedStoriesClear():void {
    this._scrum.clearSelectedStories(this.deleteIndex);
    this.deleteIndex = [];
    this.stories = this._scrum.stories;
  }

}
