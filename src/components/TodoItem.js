import React from "react";
import {Paper, Grid, List, ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction} from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditForm from "./EditForm.js";

function TodoItem(props){    
    return(
        <Paper style={{ margin: 16, padding: 5 }}>            
            <ListItem divider={props.divider}>
                <Checkbox
                    onChange = {() => props.toggleCompleted(props.todo.id)}
                    checked={props.todo.completed}
                    disableRipple/>

                <ListItemText primary={props.todo.todo} style = {{overflow: "auto"}} /> 

                <IconButton aria-label="Edit Todo" >
                    <EditOutlinedIcon onClick = {() => {
                                                            props.setTodoToEdit(props.todo.id);                                                            
                                                            console.log("edit state in onclick", props.isEditing);
                                                        }}
                    />
                </IconButton>                   
                                
                <IconButton aria-label="Delete Todo" >
                    <DeleteOutlined onClick = {() => props.deleteTodo(props.todo.id)}/>
                </IconButton>
            </ListItem>            
        </Paper>
    );    
}

export default TodoItem;