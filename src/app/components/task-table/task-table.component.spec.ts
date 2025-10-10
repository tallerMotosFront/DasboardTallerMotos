import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTableComponent } from './task-table.component';

describe('TaskTableComponent', () => {
  let component: TasksTableComponent;
  let fixture: ComponentFixture<TasksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksTableComponent]
    });
    fixture = TestBed.createComponent(TasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
