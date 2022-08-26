import React from 'react'
import TextField from "@mui/material/TextField";
import Image from "next/image"
import logo from '../../assets/Instagram.jpeg'
import Button from "@mui/material/Button";
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
function index()
{
return (
  <div className="login-container">
    <div className="insta-mob-bg">
      <div className="carousel">
        <Carousel
          autoPlay
          interval={2000}
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          stopOnHover
          showStatus={false}
        >
        </Carousel>
      </div>
    </div>
    <div>
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
           <span style={{ color: "blueviolet" }}>Forget Password</span>

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
        >
          Log in
        </Button>
      </div>
      <div className="bottom-card">
        Don't Have an account ?{" "}
        <Link href="/signup">
          <span style={{ color: "blueviolet" }}>Signup</span>
        </Link>
      </div>
    </div>
  </div>
);
}

export default index;