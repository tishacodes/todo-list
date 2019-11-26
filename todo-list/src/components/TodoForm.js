import React, { useState } from "react";
import { connnect } from "react-redux";
import { addTodo } from "../actions/actions.js";
import { connect } from "react-redux";

function TodoForm(props){

    const [todoItem, setTodoItem] = useState({ id: Date.now(), todo: "", completed: false });

    const handleChange = (event) => {

        event.preventDefault();

        setTodoItem({
            id: Date.now(),
            [event.target.name]: event.target.value,
            completed: false
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.addTodo(todoItem);   

        console.log("todo", todoItem);

        resetForm();

    }

    const resetForm = () => {
        setTodoItem({
            todo: ""
        })
    }

    return(

        <div>
            <form onSubmit = {handleSubmit} >

                <input type = "text" 
                       onChange = {handleChange} 
                       name = "todo" 
                       value = {todoItem.todo} 
                       placeholder = "...add todo" 
                />

                <button type = "submit" onClick = {handleSubmit}> Add </button>

            </form>

        </div>

    );

}

const mapStateToProps = (state) => {

    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps, {addTodo})(TodoForm);