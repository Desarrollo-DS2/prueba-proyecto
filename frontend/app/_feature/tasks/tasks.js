import { createStructuredSelector } from 'reselect';

export const NAME = "tasks";

const FETCH_TASKS_REQUEST = "[tasks]/FETCH_TASKS_REQUEST";
const FETCH_TASKS_SUCCESS = "[tasks]/FETCH_TASKS_SUCCESS";
const FETCH_TASKS_FAILURE = "[tasks]/FETCH_TASKS_FAILURE";
const POST_TASK_REQUEST = "[tasks]/POST_TASK_REQUEST";
const POST_TASK_SUCCESS = "[tasks]/POST_TASK_SUCCESS";
const POST_TASK_FAILURE = "[tasks]/POST_TASK_FAILURE";

const initialState = {
    task: null,
    tasks: [],
    loading: false,
    error: null
};

export default function tasksReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            };
        case actionTypes.FETCH_TASKS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.POST_TASK_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.POST_TASK_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case actionTypes.POST_TASK_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

function listTasks() {
    return {
        type: actionTypes.FETCH_TASKS_REQUEST
    };
}

function createTask(task) {
    return {
        type: actionTypes.POST_TASK_REQUEST,
        task
    };
}

const tasks = (state) => state[NAME];

export const selector = createStructuredSelector({
    tasks
});

export const actionCreators = {
    listTasks,
    createTask
};

export const actionTypes = {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    POST_TASK_REQUEST,
    POST_TASK_SUCCESS,
    POST_TASK_FAILURE,
};