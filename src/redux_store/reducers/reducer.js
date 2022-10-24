import {ADD_TODO} from "../actions/actions.js";
import {EDIT_TODO} from "../actions/actions.js";
import {SET_EDIT_TODO} from "../actions/actions.js"; //sets the item to be edited in state
import {DELETE_TODO} from "../actions/actions.js";
import {TOGGLE_COMPLETED} from "../actions/actions.js";
import {TOGGLE_ALL_TODOS} from "../actions/actions.js";
import {CLEAR_ALL_TASKS} from "../actions/actions.js";
import {CLEAR_COMPLETED_TASKS} from "../actions/actions.js";
import {CLEAR_INCOMPLETE_TASKS} from "../actions/actions.js";

//state object
const initialState = {    
    todoList: [               

    ],
    todoItemToEdit: {},
    isEditing: false,
    incompleteCount: 0,
    completeCount: 0
}

function reducer(state = initialState, action){
    //Inside reducers, we use switch statements to look at the action type, then return the updated state.
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                isEditing: false,
                todoItemToEdit: {},
                //appeand the newTodo in action.payload to the todoList array
                todoList: [...state.todoList, action.payload]    
            }

        case EDIT_TODO:    
            return {
                ...state,
                isEditing: true,                    
                ...state.todoList.map( (todo, index) => {
                    /*if the id of the item in the todo list matches the id in the 
                    action.payload(item to be edited) then splice the array at that index by deleting
                    the item currently at that index and adding the todo item in action.payload to that index*/
                    if(todo.id === action.payload.id) {
                        state.todoList.splice(index, 1, action.payload)                            
                    }                
                }),                  
                todoItemToEdit: {},//reset to undefined so edit form will disappear
            }

        case SET_EDIT_TODO:
            return {                
               ...state,
               isEditing:true,
               //an object inside an array [{}] is stored in todoItemToEdit
               todoItemToEdit: state.todoList.filter( todo => {
                   return todo.id === action.payload ? true : false
               })               
            }       

        case DELETE_TODO:
            return {
                ...state,
                isEditing: false,
                todoItemToEdit: {},
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
                isEditing: false,
                todoItemToEdit: {},
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
                isEditing: false,
                todoItemToEdit: {},
                todoList: state.todoList.filter (todo => {
                    return false;
                })
            }

        case CLEAR_COMPLETED_TASKS:
            return {
                ...state,
                isEditing: false,
                todoItemToEdit: {},
                todoList: state.todoList.filter (todo => {
                    return !todo.completed
                })
            }

        case CLEAR_INCOMPLETE_TASKS:
            return {
                ...state,
                isEditing: false,
                todoItemToEdit: {},
                todoList: state.todoList.filter (todo => {
                    return todo.completed
                })
            }

        default:
            return state;
    }//end switch
}

export default reducer;