import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHomeTile } from './course-home-tile';

describe('CourseHomeTile', () => {
  let component: CourseHomeTile;
  let fixture: ComponentFixture<CourseHomeTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHomeTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHomeTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
