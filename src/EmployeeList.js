import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddEmployeeModal from "./modal/AddEmployeeModal";
import EmployeeListItem from "./EmployeeListItem";

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

const EmployeeList = () => {
    const classes = useStyles();
    const [employeeList, setEmployeeList] = useState([
        {
            "id": 1,
            "name": "Shifa",
            "email": "shifashaikhmuzz@gmail.com",
            "phone": "098556121",
            "address": "Pune",
            "salary": "300000"
        }
    ]);
    const [open, setOpen] = useState(false);
    const [editEmp, setEditEmp] = useState(undefined);

    useEffect(() => {
        console.log("employeeList", employeeList);
    }, []);

    useEffect(() => {
        console.log("useEffect employeeList", employeeList);
    }, [employeeList]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddEmp = (newEmp) => {
        if (editEmp === undefined) {
            setEmployeeList([...employeeList, newEmp]);
        } else {
            const newEmployeeList = employeeList.map((emp) => {
                if (emp.id === newEmp.id) {
                    return newEmp;
                } else {
                    return emp
                }
            });
            setEmployeeList(newEmployeeList);
            setEditEmp(undefined);
        }
    }

    const handleEditEmp = (emp) => {
        setOpen(true);
        setEditEmp(emp);
    }

    const handleDeleteEmp = (empId) => {
        const newEmployeeList = employeeList.filter(emp => emp.id !== empId);
        if (window.confirm("Do you really wanted to delete Employee ..?")) {
            setEmployeeList(newEmployeeList);
        }
    }

    const EmpNotFound = () => {
        return (
            <Grid container sm={11} alignItems="center" justifyContent="center" style={{ backgroundColor: "#b5a7a71c", marginTop: "1rem" }}>
                <p> No Employees</p>
            </Grid>
        )
    }
    return (
        <>
            <Grid container direction='row' alignItems="center" justifyContent="flex-start" sm={12}>
                <Grid container direction='column' sm={1} style={{ margin: "1rem" }}>
                    <Button variant="contained"
                        startIcon={<AddIcon />}
                        style={{ backgroundColor: "black", color: "white" }}
                        onClick={handleClickOpen}
                    >
                        Add
                    </Button>
                </Grid>
                <AddEmployeeModal open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    handleAddEmp={handleAddEmp}
                    employeeList={employeeList}
                    editEmp={editEmp} />
            </Grid>
            <Grid container item sm={12} style={{ fontSize: "18px" }}>
                <Grid item container sm={1} className={classes.listColumn}>Id</Grid>
                <Grid item container sm={2} className={classes.listColumn}>Name</Grid>
                <Grid item container sm={3} className={classes.listColumn}>Email</Grid>
                <Grid item container sm={1} className={classes.listColumn}>Phone</Grid>
                <Grid item container sm={1} className={classes.listColumn}>Salary</Grid>
                <Grid item container sm={1} className={classes.listColumn}>Edit</Grid>
                <Grid item container sm={1} className={classes.listColumn}>Delete</Grid>
            </Grid>
            {employeeList && employeeList.length > 0 && employeeList.map((emp) => {
                return (
                    <EmployeeListItem emp={emp}
                        handleEditEmp={handleEditEmp}
                        handleDeleteEmp={handleDeleteEmp} />
                )
            })
            }
            {employeeList && employeeList.length === 0 &&
                <EmpNotFound />
            }
        </>
    )
}

export default EmployeeList
