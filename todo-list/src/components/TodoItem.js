import React from "react";

function TodoItem(props){

    return(

        <div>        

            <span onClick = {() => props.toggleCompleted(props.todo.id)}
                //console.log("toggle after click", props.todo.completed);
                className = { props.todo.completed ? "completed" : "not-completed"}>
                C
                </span>

                <p> {props.todo.todo} </p> 

            <span onClick = {() => {
                console.log("delete clicked");
                props.deleteTodo(props.todo.id)}
            }> X </span>   

        </div>
    );


}

export default TodoItem;