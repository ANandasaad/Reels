import React from 'react'
import TextField from "@mui/material/TextField";
import Image from "next/image"
import logo from '../../assets/Instagram.jpeg'
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";
import Link from 'next/link'
function index() {
  return (
    <div className="login-container">
      <div className="login-card">
        <Image src={logo} />
        <TextField
          id="outlined-basic"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        
       <span style={{ color: "blueviolet" }}> Forget Password ?</span>

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
        >
          Login
        </Button>
      </div>
      <div className="bottom-card">
        Don't Have an account ?{" "}
        <Link href='/login'>
          <span style={{ color: "blueviolet" }}>Sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default index