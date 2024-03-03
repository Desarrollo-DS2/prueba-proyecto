import {combineReducers} from 'redux';

import tasksReducer, {NAME as tasksName} from '../_feature/tasks/tasks';

const rootReducer = combineReducers({
    [tasksName]: tasksReducer
});

export default rootReducer;