import { takeLatest } from "redux-saga/effects";

import { fetchTasks, fetchPostTask } from './tasks/tasksSagas';

import { actionTypes as tasksTypes } from "../_feature/tasks/tasks";

export default function* rootSagas() {
    yield takeLatest(tasksTypes.FETCH_TASKS_REQUEST, fetchTasks);
    yield takeLatest(tasksTypes.POST_TASK_REQUEST, fetchPostTask);
}