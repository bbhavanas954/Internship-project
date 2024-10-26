import React from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Textfields = (props) => {
    return (
        <div>
            <Typography variant="h6">{props.label}</Typography>
            <TextField 
                type={props.type} 
                placeholder={props.placeholder} 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
        </div>
    );
};

const Property = () => {
    return (
        <div>
            <Textfields variant="outlined" style={{border:"line"}} type="text" label="Firstname" placeholder="Enter Firstname" />
            <Textfields variant="Outlined" style={{border:"line"}} label="Last name" type="text" placeholder="Lastname"/>
            <Textfields variant="Outlined" style={{border:"line"}} label="Mobile No." type="tel" placeholder="Mobile No."/>
        </div>
    );
};

export default Property;