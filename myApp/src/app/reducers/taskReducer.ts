import { CustomAction } from './../actions';
import { TaskActions } from './../actions/taskAction'

export interface IGeneralState {
    items: Array<any>

}

export const initialGeneralState: IGeneralState = {
    items: []
}

export function TaskReducer
    (state: IGeneralState = initialGeneralState, action: CustomAction):
    IGeneralState {
    switch (action.type) {
        case TaskActions.ADD_TODO:
            state.items.push(action.payload);
            return {
                items: state.items
            };
        case TaskActions.DELETE_TODO:
            let index = state.items.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1);
            }
            return {
                items: state.items
            };
        case TaskActions.MARK_COMPLETED:
            let matchedindex = state.items.findIndex(item => item.id === action.payload)
            if (matchedindex !== -1) {
                state.items[matchedindex].status = 'Completed'
            }
            return {
                items: state.items
            };

        default:
            return state;
    }
};
