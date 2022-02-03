import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'; 
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    listColumn: {
        marginLeft: "1rem"
    },
    listColumn1: {
        marginLeft: "1rem",
        marginTop: "2rem"
    },
    listColumnIcons: {
        marginLeft: "1rem",
        marginTop: "1rem"
    }
});

const EmployeeListItem = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item container sm={12}>
                <Grid item container sm={1} className={classes.listColumn1}>{props.emp.id}</Grid>
                <Grid item container sm={2} className={classes.listColumn1}>{props.emp.name}</Grid>
                <Grid item container sm={3} className={classes.listColumn1}>{props.emp.email}</Grid>
                <Grid item container sm={1} className={classes.listColumn1}>{props.emp.phone}</Grid>
                <Grid item container sm={1} className={classes.listColumn1}>{props.emp.salary}</Grid>
                <Grid item container sm={1} className={classes.listColumnIcons}>
                    <IconButton aria-label="edit">
                        <EditIcon onClick={() => { props.handleEditEmp(props.emp) }} />
                    </IconButton>
                </Grid>
                <Grid item container sm={1} className={classes.listColumnIcons}>
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={() => { props.handleDeleteEmp(props.emp.id) }} />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

export default EmployeeListItem
