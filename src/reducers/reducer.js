import {ADD_TODO} from "../actions/actions.js";
import {DELETE_TODO} from "../actions/actions.js";
import {TOGGLE_COMPLETED} from "../actions/actions.js";
import {CLEAR_ALL_TASKS} from "../actions/actions.js";
import {CLEAR_COMPLETED_TASKS} from "../actions/actions.js";
import {CLEAR_INCOMPLETE_TASKS} from "../actions/actions.js";


//state object
const initialState = {
    todoList: [        
        {
            id: 1,
            todo: "code",
            completed: false
        },

        {
            id: 2,
            todo: "sleep",
            completed: false
        },

        {
            id: 3,
            todo: "repeat",
            completed: false
        }
    ]    
    
}


function reducer(state = initialState, action){

    //Inside reducers, we use switch statements to look at the action type, then return the updated state.
    switch(action.type){

        case ADD_TODO:

            return {
                ...state,
                //appeand the newTodo in action.payload to the todoList array
                todoList: [...state.todoList, action.payload]             

            }

        case DELETE_TODO:
            return {
                ...state,
                //filter method creates a new array with all elements that passes the test(returns true)
                todoList: state.todoList.filter( todo => {
                    {                        
                        return (todo.id === action.payload) ? false : true
                    }
                })

            }

        case TOGGLE_COMPLETED:
            return {
                ...state,
                todoList: state.todoList.map( todo => {
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }                    
                    }
                    else {
                        return todo;
                    }

                })

            }       

        case CLEAR_ALL_TASKS:
            return {
                ...state,
                todoList: state.todoList.filter (todo => {
                    return false;
                })

            }

        case CLEAR_COMPLETED_TASKS:
            return {
                ...state,
                todoList: state.todoList.filter (todo => {
                    return !todo.completed
                })
            }

            case CLEAR_INCOMPLETE_TASKS:
                    return {
                        ...state,
                        todoList: state.todoList.filter (todo => {
                            return todo.completed
                        })
                    }

        default:
            return state;


    }//end switch

}

export default reducer;