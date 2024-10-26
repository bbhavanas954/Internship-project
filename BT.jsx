import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
function Bi(){
    return(
    <>
    <div>
    <Button variant="outlined" style={{color:"Green"}}>Bhavana</Button><br /><br />
        <Button variant="contained" style={{background:"Orange"}}>Bhavana</Button><br /><br />
        <Button variant="text" style={{color:"Magenta"}}>Bhavana</Button><br></br>
        <TextField variant="outlined" style={{border:"line"}} type="text" label="First Name" placeholder='First Name'></TextField> <br/><br/>
        <TextField variant="outlined" style={{border:"line"}} type="tel" label="Phone Number" placeholder='Phone Number'></TextField><br/><br/>
        <TextField variant="outlined" style={{border:"line"}} type="Number" label="Age" placeholder='Age'/><br/><br/>
        <TextField variant="outlined" type="Checkbox" label="Checkbox"></TextField><br/><br/>
        <TextField variant="outlined" style={{border:"line"}} type="Date"></TextField><br/><br/>
        <TextField variant="outlined" style={{border:"line"}} type="Color"></TextField><br/><br/>
        <TextField variant="outlined" style={{border:"line"}} type="radio"></TextField><br/><br/>
        <TextField variant="outlined" style={{border:"line"}} type="File"></TextField><br/><br/>
    </div>
    </>
    )
}
export default Bi
