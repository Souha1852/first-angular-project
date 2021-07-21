import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTopicsComponent } from './related-topics.component';

describe('RelatedTopicsComponent', () => {
  let component: RelatedTopicsComponent;
  let fixture: ComponentFixture<RelatedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
