import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js";
import TodoForm from "./TodoForm.js";
import { deleteTodo, toggleCompleted } from "../actions/actions.js";

function TodoList(props){

    return(

        <div>

           <TodoForm />

           {props.todoList.map (todo => {
               return <TodoItem todo = {todo} 
                                deleteTodo = {props.deleteTodo} 
                                toggleCompleted = {props.toggleCompleted}
                     />
           })}
            
        </div>

    );

}

const mapStateToProps = (state) => {

    return {
        todoList: state.todoList

    }

}

export default connect(mapStateToProps, { deleteTodo, toggleCompleted })(TodoList);