import React, { useState, memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core"
import { connnect } from "react-redux";
import { setTodoToEdit, addTodo, editTodo } from "../actions/actions.js";
import { connect } from "react-redux";

function EditForm(props){   

    //props.resetEditState();
    console.log("edit state in edit form", props.isEditing);

    console.log("todo item to edit in edit form", props.todoItemToEdit[0]);

    //used [0] because an object inside an array [{}] is stored in todoItemToEdit state in reducer.js 
    const [editItem, setEditItem] = useState({ id: props.todoItemToEdit[0].id, 
                                               todo: props.todoItemToEdit[0].todo, 
                                               completed: props.todoItemToEdit[0].completed });

    console.log(" edit todo in edit form", editItem.todo);

    const handleChange = (event) => {

        event.preventDefault();

        setEditItem({
            id: props.todoItemToEdit[0].id,
            [event.target.name]: event.target.value,
            completed: props.todoItemToEdit[0].completed
        })        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(editItem.todo === ""){
            window.alert("Please enter a todo item.")
        } else {

            props.editTodo(editItem);  

        }       

        console.log("edited todo in handle submit in edit form", editItem);

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

export default connect(mapStateToProps, {addTodo, editTodo, setTodoToEdit})(EditForm);