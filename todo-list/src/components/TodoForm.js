import React, { useState } from "react";
import { connnect } from "react-redux";
import { addTodo } from "../actions/actions.js";
import { connect } from "react-redux";

function TodoForm(props){

    const [todo, setTodo] = useState("");

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return(

        <div>
            <form onSubmit = {handleSubmit} >

                <input type = "text" 
                       onChange = {handleChange} 
                       name = "todo" 
                       value = {todo} 
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