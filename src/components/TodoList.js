import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Paper, Toolbar, Typography} from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

import { connect } from "react-redux";
import TodoItem from "./TodoItem.js";
import TodoForm from "./TodoForm.js";
import AppBar from "./AppBar.js";

import { deleteTodo, toggleCompleted, clearAllTasks, clearCompletedTasks, clearIncompleteTasks } from "../actions/actions.js";

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
    
    //finds completed tasks
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

                {props.todoList.map (todo => {
                    return <TodoItem todo = {todo} 
                                    deleteTodo = {props.deleteTodo} 
                                    toggleCompleted = {props.toggleCompleted} />
                })}
                
                </div>
            
            </Paper>

        </Box>
    );   

}

const mapStateToProps = (state) => {

    return {
        todoList: state.todoList

    }

}

export default connect(mapStateToProps, 
                      { deleteTodo, toggleCompleted, clearAllTasks, clearCompletedTasks, clearIncompleteTasks })
                      (TodoList);