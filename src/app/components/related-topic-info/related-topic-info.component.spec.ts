import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTopicInfoComponent } from './related-topic-info.component';

describe('RelatedTopicInfoComponent', () => {
  let component: RelatedTopicInfoComponent;
  let fixture: ComponentFixture<RelatedTopicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedTopicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedTopicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
