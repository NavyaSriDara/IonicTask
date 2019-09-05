import { Injectable } from '@angular/core';
import { CustomAction } from './index';
import { NgStyle } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class TaskActions {

    static ADD_TODO = 'ADD_TODO';
    AddToDo(taskPayload: any): CustomAction {
        return {
            payload: taskPayload,
            type: TaskActions.ADD_TODO
        }
    }
    static DELETE_TODO = 'DELETE_TODO';
    deleteToDo(taskPayload: any): CustomAction {
        return {
            payload: taskPayload,
            type: TaskActions.DELETE_TODO
        }
    }
    static MARK_COMPLETED = 'MARK_COMPLETED'
    markTaskAsCompleted(payload: any): CustomAction {
        return {
            payload: payload,
            type: TaskActions.MARK_COMPLETED
        }
    }


}
