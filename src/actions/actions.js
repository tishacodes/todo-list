//Instead of passing a string to action.type we will create a variable with the name of the string, 
//and assign it the string we would have passed to an action. 
//Then we give action.type the variable as it’s value and import it wherever we need it.

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_EDIT_TODO = "SET_EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_ALL_TASKS = "CLEAR_ALL_TASKS";
export const CLEAR_COMPLETED_TASKS = "GET_COMPLETED_TASKS_COUNT";
export const CLEAR_INCOMPLETE_TASKS = "GET_UNCOMPLETED_TASKS_COUNT";

//action creators - functions that create and dispatches/returns actions (objects)
export const addTodo = (newTodo) => {

    return{
        type: ADD_TODO,
        payload: newTodo
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



