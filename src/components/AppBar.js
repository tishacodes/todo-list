import React, {useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import Tooltip from '@material-ui/core/Tooltip';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  //variables to store the number of all tasks, completed, and incomplete tasks passed in as props from TodoList.js
  const count = props.count > 0 ? props.count : "0";
  const completedCount = props.completedCount > 0 ? props.completedCount : "0";
  const incompleteCount = props.incompleteCount > 0 ? props.incompleteCount : "0";

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);  

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton onClick = {() => props.clearAllTasks(props.todoList)} aria-label="show 4 new mails" color="inherit">
        <Tooltip title="Click to Delete all Todos" arrow>
          <Badge badgeContent={count} color="secondary">
            <FormatListNumberedIcon />
          </Badge>
          </Tooltip>
        </IconButton>
        <p>All Tasks</p>
      </MenuItem>
      <MenuItem>
        <IconButton onClick = {() => props.clearCompletedTasks(props.todoList)} aria-label="show 11 new notifications" color="inherit">
        <Tooltip title="Click to Delete Completed Todos" arrow>
          <Badge badgeContent={ completedCount} color="secondary">
            <PlaylistAddCheckIcon />
          </Badge>
        </Tooltip>
        </IconButton>
        <p>Completed</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton onClick = {() => props.clearIncompleteTasks(props.todoList)} aria-label="show 17 new notifications" color="inherit">
        <Tooltip title="Click to Delete Incomplete Todos" arrow>
          <Badge badgeContent={incompleteCount} color="secondary">
            <LowPriorityIcon />
          </Badge>
        </Tooltip>
        </IconButton>
        <p>Incomplete</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            style = {{ pointerEvents: 'none' }}              
          >                       
            <FormatListBulletedIcon />         
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ToDo App
          </Typography>
         
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Tooltip title="Delete all Todos" arrow>
            <span>
              <IconButton disabled = {props.count === 0} onClick = {() => props.clearAllTasks(props.todoList)} aria-label="show all todos" color="inherit">            
                <Badge badgeContent={count} color="secondary">
                  <FormatListNumberedIcon  />
                </Badge>           
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Delete Completed Todos" arrow>
            <span>
              <IconButton disabled = {props.completedCount === 0} onClick = {() => props.clearCompletedTasks(props.todoList)} aria-label="show 17 new notifications" color="inherit">            
                <Badge badgeContent={completedCount} color="secondary">
                  <PlaylistAddCheckIcon />
                </Badge>            
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Delete Incomplete Todos" arrow>
            <span>
              <IconButton disabled = {props.incompleteCount === 0} onClick = {() => props.clearIncompleteTasks(props.todoList)} aria-label="show 17 new notifications" color="inherit">             
                <Badge badgeContent={incompleteCount} color="secondary">
                  <LowPriorityIcon />              
                </Badge>             
              </IconButton>
            </span>
          </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}      
    </div>
  );
}
