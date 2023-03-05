import { CloseRounded, InputOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React, {useEffect, useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme?: any) => ({
  form: {
    "&": {
      position: "relative",
      width: "100%",
      padding: "40px 40px 60px",
      background: "#352a4e",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow:
        "-5px -5px 10px rgba(255,255,255,0.25),5px 5px 15px rgba(0,0,0,0.5)",
    },
    "& h2": {
      color: "#fff",
      letterSpacing: "4px",
      fontWeight: "500",
      fontSize: "25px",
    },
    "&>div:first-of-type": {
      marginTop: "40px",
      width: "100%",
    },
    "&>div": {
      width: "100%",
    },
    "&>div input": {
      color: "#fff",
      padding:'16.5px 14px',
      borderRadius: "30px",
      boxShadow:
        "inset -2px -2px 6px rgba(255,255,255,0.1),inset 2px 2px 6px rgba(0,0,0,0.8)",
              
    },
    "&>div label": {
        color:'#cfc5c599'
      },
    "&>button:last-of-type": {
      marginTop: "20px",
    },
    "&>a": {
        color: "#fff",
        marginTop: "10px",
        alignSelf:'flex-start'
      },
      "&>a:hover": {
        cursor:'pointer'
      },
  },
}));
function useOutsideAlerter(ref:any,setShowLogin:any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
         setShowLogin(false);
      }
    }
    // Bind the event listener

      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  
}
function Login(props:any) {
  const [showPassword, setShowPassword] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,props.setShowLogin);
  const classes = useStyle();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Stack
      sx={{
        position: "fixed",
        height: "100%",
        width:'100%',
        alignItems:'center',
        justifyContent: "center",
        zIndex: "1001",
        alignSelf: "center",
        display:props.showLogin?'flex':'none'
      }}
    >
      <Box
        ref={wrapperRef}
        className={classes.form}
        component="form"
        sx={{ display: "flex", flexDirection: "column",maxWidth:'500px', }}
      >
        <IconButton onClick={()=>props.setShowLogin(false)} sx={{p:'0',position:'absolute',zIndex:'1',top:'-15px',right:'-15px',background:'#000',"&:hover":{background:'#d82a2a'}}}>
          <CloseRounded sx={{color:'#fff',width:'30px',height:'30px'}}/>
        </IconButton>
        <Typography variant="h2">Đăng Nhập</Typography>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-user">Email</InputLabel>
          <InputBase
            id="outlined-adornment-user"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <PersonIcon sx={{color:'#fff'}}/>
                </IconButton>
              </InputAdornment>
            }
            placeholder="Email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <InputBase
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff sx={{color:'#fff'}}/> : <Visibility sx={{color:'#fff'}} />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          />
        </FormControl>
        <Link underline="none">Quên mật khẩu ?</Link>
        <Button variant="contained">Đăng Nhập</Button>
        
      </Box>
      
    </Stack>
  );
}

export default Login;
