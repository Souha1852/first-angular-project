import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDetailComponent } from './framework-detail.component';

describe('FrameworkDetailComponent', () => {
  let component: FrameworkDetailComponent;
  let fixture: ComponentFixture<FrameworkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
