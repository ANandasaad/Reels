import React ,{useContext} from 'react'
import TextField from "@mui/material/TextField";
import Image from "next/image"
import logo from '../../assets/Instagram.jpeg'
import Button from "@mui/material/Button";
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from '../../context/auth';
function index()
{
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  const { login } = useContext(AuthContext);

  let handleClick = async() =>{
    try{
      console.log(email);
      console.log(password);
      setLoading(true);
      setError('');
      await login(email, password);
      console.log("logged in");
    }
    catch(err)
    {
      console.log("error", JSON.stringify(err));
      setError(err.message);
    }

    setLoading(false);
  }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />

            {/* if error is present then show error */}
          {error != "" && <div style={{ color: "red" }}>{error}</div>}
          <Link href="/forgot">
            <div style={{ color: "blue", marginTop: "0.5rem" }}>
              Forget Password{" "}
            </div>
          </Link>

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
          onClick={handleClick}
          disabled={loading}
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