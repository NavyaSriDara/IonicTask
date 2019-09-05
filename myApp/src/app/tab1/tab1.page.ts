import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../reducers';
import { TaskActions } from '../actions/taskAction';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private taskName: string;
  private fireStoreTaskList: Array<any>
  @ViewChild('taskInput', {
    read: {},
    static: true
  }) input: any;

  constructor(private store: Store<IAppState>,
    private taskActs: TaskActions,
  ) {
    store.select(s => s.task.items).subscribe((items) => {
      this.fireStoreTaskList = items;

    })
  }


  addTask(): void {
    if (this.taskName && this.taskName.length > 0) {
      let task = this.taskName;
      let id = new Date().getTime();
      let payload = {
        task: task,
        id: id,
        status: 'inCompleted'
      }
      this.store.dispatch(this.taskActs.AddToDo(payload))
      this.taskName = "";
    }
  }
  deleteTask(id: any) {
    this.store.dispatch(this.taskActs.deleteToDo(id));
  }
  markAsComplete(id: any) {
    this.store.dispatch(this.taskActs.markTaskAsCompleted(id));

  }
}
