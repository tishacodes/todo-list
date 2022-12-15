export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_EDIT_TODO = "SET_EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const TOGGLE_ALL_TODOS = "TOGGLE_ALL_TODOS";
export const CLEAR_ALL_TASKS = "CLEAR_ALL_TASKS";
export const CLEAR_COMPLETED_TASKS = "GET_COMPLETED_TASKS_COUNT";
export const CLEAR_INCOMPLETE_TASKS = "GET_UNCOMPLETED_TASKS_COUNT";

export const addTodo = (newTodo) => {
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}

export const editTodo = (editItem) => {
    return{
        type: EDIT_TODO,
        payload: editItem
    }
}

export const setTodoToEdit = (id) => {
    return {
        type: SET_EDIT_TODO,
        payload: id
    }
}

export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        payload: id
    }
}

export const toggleCompleted = (id) => {
    return{
        type: TOGGLE_COMPLETED,
        payload: id
    }
}

export const clearAllTasks = (todoList) => {
    return {
        type: CLEAR_ALL_TASKS,
        payload: todoList
    }
}

export const clearCompletedTasks = (todoList) => {
    return {
        type: CLEAR_COMPLETED_TASKS,
        payload: todoList
    }
}

export const clearIncompleteTasks = (todoList) => {
    return {
        type: CLEAR_INCOMPLETE_TASKS,
        payload: todoList
    }
}