import React, { useState, memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import { addTodo } from "../redux_store/actions/actions.js";
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

        if(todoItem.todo === ""){
            window.alert("Please enter a todo item.");
        } else {
            props.addTodo(todoItem);  
        }              

        resetForm();
    }

    const resetForm = () => {
        setTodoItem({
            todo: ""
        })
    }

    return(
        <Paper style={{ margin: 16, padding: 16 }}>
            <form onSubmit = {handleSubmit} >
                <Grid container>                    
                    <Grid display="flex" flexWrap="nowrap" xs={10} md={10} justifyContent = "flex-start" item style={{ paddingRight: 16 }} >
                        <TextField
                            placeholder="...add todo"
                            name = "todo"
                            value = {todoItem.todo}
                            onChange = {handleChange}            
                            fullWidth 
                        />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                            disabled={todoItem.todo === ""}
                            fullWidth
                            color="secondary"
                            variant="outlined"
                            type = "submit"
                            onClick = {handleSubmit}>
                            Add
                        </Button>
                    </Grid>               
                </Grid>
            </form>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps, {addTodo})(TodoForm);