import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    textBoxes: {
        marginRight: "2rem"
    }
});

const AddEmployeeModal = (props) => {
    const classes = useStyles();
    const [empName, setEmpName] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empPhone, setEmpPhone] = useState("");
    const [empAddress, setEmpAddress] = useState("");
    const [empSalary, setEmpSalary] = useState("");
    const [forEdit, setForEdit] = useState(props.editEmp);

    useEffect(() => {
        console.log("forEdit", props.editEmp);
        setForEdit(props.editEmp);
        // onEditEmployee();
    }, [props.editEmp])

    useEffect(() => {
        onEditEmployee()
    }, [forEdit])

    const ClearData = () => {
        setEmpName("");
        setEmpEmail("");
        setEmpPhone("");
        setEmpAddress("");
        setEmpSalary("");
    }

    const onEditEmployee = () => {
        if (props.open) {
            setEmpName(forEdit.name);
            setEmpEmail(forEdit.email);
            setEmpPhone(forEdit.phone);
            setEmpAddress(forEdit.address);
            setEmpSalary(forEdit.salary);
        }
    }
    const onAddEmployee = () => {
        var newEmp = {
            "id": forEdit === undefined ? props.employeeList.length + 1 : forEdit.id,
            "name": empName,
            "email": empEmail,
            "phone": empPhone,
            "address": empAddress,
            "salary": empSalary
        }
        props.handleAddEmp(newEmp);
        ClearData();
        props.handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
                <DialogContent>
                    <TextField
                        id="name"
                        label="Add Name"
                        type="text"
                        value={empName}
                        className={classes.textBoxes}
                        onChange={(e) => setEmpName(e.target.value)}
                    />
                    <TextField
                        id="name"
                        label="Add Email"
                        type="email"
                        value={empEmail}
                        className={classes.textBoxes}
                        onChange={(e) => setEmpEmail(e.target.value)}
                    />
                    <TextField
                        id="name"
                        label="Add Phone"
                        type="number"
                        value={empPhone}
                        className={classes.textBoxes}
                        onChange={(e) => setEmpPhone(e.target.value)}
                        helperText="Add Phone"
                    />
                    <TextField
                        id="name"
                        label="Add Address"
                        type="text"
                        value={empAddress}
                        className={classes.textBoxes}
                        onChange={(e) => setEmpAddress(e.target.value)}
                    />
                    <TextField
                        id="name"
                        label="Add Salary"
                        type="number"
                        value={empSalary}
                        className={classes.textBoxes}
                        onChange={(e) => setEmpSalary(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onAddEmployee} color="primary">
                        {forEdit === undefined ? "Add" : "Edit"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddEmployeeModal
