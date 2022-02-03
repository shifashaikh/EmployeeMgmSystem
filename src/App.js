import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeMain from "./EmployeeMain";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "black",
    margin: "10px"
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid container direction='row'>
        <Grid container direction='column' sm={12} alignItems="center" justifyContent="center">
          <Typography variant="h4" className={classes.title}>
            Employee Management Application
          </Typography>
        </Grid>
      </Grid>
      <Grid item container sm={12}><EmployeeMain /></Grid>
    </Grid>
  );
}

export default App;
