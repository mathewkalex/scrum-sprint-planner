import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesPointComponent } from './stories-point.component';

describe('StoriesPointComponent', () => {
  let component: StoriesPointComponent;
  let fixture: ComponentFixture<StoriesPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesPointComponent]
    });
    fixture = TestBed.createComponent(StoriesPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
