import { combineReducers } from '@ngrx/store';


import {
     IGeneralState,
    initialGeneralState
} from './taskReducer';
import { TaskReducer } from './taskReducer';

export interface IAppState {
    task: IGeneralState;
}

export const reducers = {
    task: TaskReducer,
   
}

export const initalState = {
    task: initialGeneralState,
    
}

// export default function rootReducer(): any {
//   return compose(combineReducers)(reducers)
// }

// export default combineReducers(reducers);
// export default compose(combineReducers)(reducers)

// const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);
export default function reducer(state: any, action: any): any {
    // if (PROD) {
    return productionReducer(state, action);
    // }
    // else {
    //   return developmentReducer(state, action);
    // }
}
