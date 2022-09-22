//functional imports
import React, { useState, useContext } from 'react';
import { LoggedUserContext } from './LoggedUserContext';

//component imports
import FacultyCourses from './FacultyCourses';

//material imports
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import CollectionsIcon from '@material-ui/icons/Collections';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

function Faculty() {
  const { currentUser } = useContext(LoggedUserContext)
  const [open101, setOpen101] = useState(true);
  const [open202, setOpen202] = useState(true);
  const [open303, setOpen303] = useState(true);
  const [open404, setOpen404] = useState(true);
  const [open505, setOpen505] = useState(true);

  const courses = ["eng101", "eng202", "eng303", "eng404", "eng505"]

  const listCourses = courses.map((course, i) => {
    return (
      <FacultyCourses key={i} course={course}/>
    )
  })

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
  const classes = useStyles();

  const handle101Click = () => {
    setOpen101(!open101);
  };

  const handle202Click = () => {
    setOpen202(!open202);
  };

  const handle303Click = () => {
    setOpen303(!open303);
  };

  const handle404Click = () => {
    setOpen404(!open404);
  };

  const handle505Click = () => {
    setOpen505(!open505);
  };

  return (
    <>
    {currentUser ?
    <Container style={{ marginTop: '80px' }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Your courses!
          </ListSubheader>
        }
        className={classes.root}
      >
        {listCourses}
      </List>
    </Container>
    : <h3>Please login to view this content!</h3> }
    </>
  )
}

export default Faculty;