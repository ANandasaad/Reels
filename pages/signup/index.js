import React from 'react'
import TextField from '@mui/material/TextField';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
        <TextField id="outlined-basic" size="small"  label="Email" variant="outlined" fullWidth margin='dense'/>

        <TextField id="outlined-basic" size="small"  label="Password" variant="outlined" fullWidth type="password" margin='dense'/>

        <TextField id="outlined-basic" size="small"  label="Full Name" variant="outlined" fullWidth  margin="dense"/>
    </div>
    </div>
  )
}

export default index