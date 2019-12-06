import React, { useState, memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core"
import { connnect } from "react-redux";
import { setTodoToEdit, addTodo } from "../actions/actions.js";
import { connect } from "react-redux";

function EditForm(props){   

    //props.resetEditState();
    console.log("edit state in edit form", props.isEditing);

    console.log("todo item to edit in edit form", props.todoItemToEdit[0]);

    const [editItem, setEditItem] = useState({ id: props.todoItemToEdit[0].id, 
                                               todo: props.todoItemToEdit[0].todo, 
                                               completed: props.todoItemToEdit.completed });

    console.log(" edit todo ", editItem.todo);

    const handleChange = (event) => {

        event.preventDefault();

        setEditItem({
            id: Date.now(),
            [event.target.name]: event.target.value,
            completed: false
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(editItem.todo === ""){
            window.alert("Please enter a todo item.")
        } else {

            props.addTodo(editItem);  

        }       

        console.log("todo", editItem);

        resetForm();

    }

    const resetForm = () => {
        setEditItem({
            todo: ""
        })
    }

    return(

        <Paper style={{ margin: 16, padding: 16 }}>
            <form onSubmit = {handleSubmit} >
                <Grid container>
                    
                    <Grid display="flex" flexWrap="nowrap" xs={10} md={10} justifyContent = "flex-start" item style={{ paddingRight: 16 }} >
                        <TextField                        
                        name = "todo"
                        placeholder = {editItem.todo}
                        value = {editItem.todo}
                        onChange = {handleChange}            
                        fullWidth />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        type = "submit"
                        onClick = {handleSubmit}>
                        Save
                        </Button>
                    </Grid>               
                </Grid>
            </form>
        </Paper>

    );    

}

const mapStateToProps = (state) => {

    return {
        todoList: state.todoList,
        todoItemToEdit: state.todoItemToEdit
    }
}

export default connect(mapStateToProps, {addTodo, setTodoToEdit})(EditForm);