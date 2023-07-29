import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrumService {
  stories!: any;
  autoSelected:any = [];
  constructor() {
    this.getAllStory();
  }

  writeStory(data: any): boolean {
    const duplicate = this.stories?.filter((x: any) => x.story_name === data.story_name);
    if (duplicate.length) {
      return false;
    } else {
      this.stories = this.stories ? [...this.stories, data] : [data];
      localStorage.setItem('stories', JSON.stringify(this.stories));
      return true;
    }
  }

  getAllStory(): void {
    this.stories = JSON.parse(localStorage.getItem('stories') ?? '');
  }

  clearAllStories(): void {
    this.stories = [];
    localStorage.setItem('stories', JSON.stringify(this.stories));
  }

  clearSelectedStories(indeces:[]) {
    for(const index of indeces) {
      this.stories.splice(index,1);
    }
    localStorage.setItem('stories', JSON.stringify(this.stories));
  }

  set autoSelectedData(data: any) {
    this.autoSelected = data;
  }

  get autoSelectedData() {
    return this.autoSelected;
  }

  autoSelectStories(sprintCapacity: number): any {
    console.log(sprintCapacity)
    const sortedStories = this.stories.sort((a: any, b: any) => b.story_point - a.story_point);
    const selectedStories: any[] = [];
    let remainingCapacity = sprintCapacity;
    for (const story of sortedStories) {
      if (story.story_point <= remainingCapacity) {
        selectedStories.push(story);
        remainingCapacity -= story.story_point;
      }

      if (remainingCapacity <= 0) {
        break;
      }
    }
    return selectedStories;
  }
}
