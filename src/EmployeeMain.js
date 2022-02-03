import React from 'react'
import EmployeeList from "./EmployeeList";
import Grid from '@material-ui/core/Grid';


const EmployeeMain = () => {
    return (
        <div>
            <Grid container sm={12} style={{margin:"1rem"}}>
                <EmployeeList />
            </Grid>
        </div>
    )
}

export default EmployeeMain
