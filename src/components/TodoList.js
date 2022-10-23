import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Paper} from '@material-ui/core';
import EditForm from "./EditForm.js";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.js";
import TodoForm from "./TodoForm.js";
import AppBar from "./AppBar.js";

import { setTodoToEdit,     
         deleteTodo, 
         toggleCompleted, 
         clearAllTasks, 
         clearCompletedTasks, 
         clearIncompleteTasks } from "../actions/actions.js";

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));

function TodoList(props){      
    const classes = useStyles();

    let count = props.todoList.length; //total number of all tasks
    let completedCount = 0; //completed tasks
    let incompleteCount = 0; //incomplete tasks
    
    //find completed tasks
    props.todoList.forEach( todo => {
        if(todo.completed === true){
            completedCount = completedCount + 1;
        }
    })    
    
    //find incomplete tasks
    props.todoList.forEach( todo => {
        if(todo.completed === false){
            incompleteCount = incompleteCount + 1;
        }
    })    
    
    return (
        <Box display="flex" flexWrap="nowrap" p={1} m={1} justifyContent = "center">
            <Paper className={classes.root} elevation = {5} style = {{padding: 0, width: 500, height: 600, overflow: "auto"}} >            
                <AppBar count = {count} 
                        todoList = {props.todoList}
                        completedCount = {completedCount} 
                        incompleteCount = {incompleteCount}
                        clearAllTasks = {props.clearAllTasks}
                        clearCompletedTasks = {props.clearCompletedTasks}
                        clearIncompleteTasks = {props.clearIncompleteTasks} />

                <div>                
                    <TodoForm />                
                
                    {/*start outer ternary statement*/} 
                    {/*if the first item in the todoItemToEdit array is not undefined
                    map over the todoList array */}
                    {
                        props.todoItemToEdit[0] !== undefined ? (
                            /*compare the id of each todo item to the id of the item to edit
                            if there is a match, display the edit form, else display the item */
                            props.todoList.map (todo => {
                                {/*start inner ternary statement*/} 
                                return (todo.id !== props.todoItemToEdit[0].id ) ? 
                                (  
                                <TodoItem todo = {todo} 
                                        todoItemToEdit = {props.todoItemToEdit}
                                        isEditing = {props.isEditing}
                                        resetEditState = {props.resetEditState}
                                        setTodoToEdit = {props.setTodoToEdit}
                                        deleteTodo = {props.deleteTodo} 
                                        toggleCompleted = {props.toggleCompleted} /> )                                     
                                :
                                <EditForm todoItemToEdit = {props.todoItemToEdit} resetEditState = {props.resetEditState} isEditing = {props.isEditing} />                                 
                            })
                        )  /*end inner ternary statement*/                     
                        : 
                        /*else -- if props.todoItemToEdit[0] is undefined, return the todo items*/                    
                        (
                            props.todoList.map (todo => {
                                return <TodoItem todo = {todo} 
                                        todoItemToEdit = {props.todoItemToEdit}
                                        isEditing = {props.isEditing}
                                        resetEditState = {props.resetEditState}
                                        setTodoToEdit = {props.setTodoToEdit}
                                        deleteTodo = {props.deleteTodo} 
                                        toggleCompleted = {props.toggleCompleted} /> 
                            })
                        )
                    }  {/*end outer ternary statement*/}                
                </div>            
            </Paper>
        </Box>
    ); 
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        isEditing: state.isEditing,
        todoItemToEdit: state.todoItemToEdit   
    }
}

export default connect(mapStateToProps, { 
                        setTodoToEdit, 
                        deleteTodo, 
                        toggleCompleted, 
                        clearAllTasks, 
                        clearCompletedTasks, 
                        clearIncompleteTasks 
                    })(TodoList);