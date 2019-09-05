import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskList } from './taskList.page';

describe('Tab1Page', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskList],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
