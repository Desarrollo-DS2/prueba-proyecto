import { put, call } from "redux-saga/effects";

import { getTasks, postTask } from "../../_api/tasks/tasksApi";

import { actionTypes as tasksTypes } from "../../_feature/tasks/tasks";

export function* fetchTasks() {
  try {
    const tasks = yield call(getTasks);
    yield put({ type: tasksTypes.FETCH_TASKS_SUCCESS, tasks });
  } catch (error) {
    yield put({ type: tasksTypes.FETCH_TASKS_FAILURE, error });
  }
}

export function* fetchPostTask(action) {
  try {
    yield call(postTask, action.task);
    yield put({ type: tasksTypes.POST_TASK_SUCCESS });
  } catch (error) {
    yield put({ type: tasksTypes.POST_TASK_FAILURE, error });
  }
}