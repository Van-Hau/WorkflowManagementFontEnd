import { CloseRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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

    "& .Mui-focused": {
      color: "#cfc5c599 !important",
    },
    "& .MuiInputLabel-shrink": {
      left: "19px",
      top:'-15px',
      fontSize: "20px",
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
      padding: "16.5px 14px",
      borderRadius: "30px",
      boxShadow:
        "inset -2px -2px 6px rgba(255,255,255,0.1),inset 2px 2px 6px rgba(0,0,0,0.8)",
    },
    "& label": {
      color: "#cfc5c599",
    },
    "&>button:last-of-type": {
      marginTop: "20px",
    },
    "&>a": {
      color: "#fff",
      marginTop: "10px",
      alignSelf: "flex-start",
    },
    "&>a:hover": {
      cursor: "pointer",
    },
  },
}));

function SignUp(props:any) {
  const classes = useStyle();
  const [age, setAge] = useState("");
  const handleChange = (e:any) => {
    setAge(e.target.value);
  };
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
        display: props.showSignUp?"flex" :"none"
      }}
    > 
      
      <Box
        className={classes.form}
        component="form"
        sx={{ display: "flex",width:'100%', flexDirection: "column",maxWidth:'800px' }}
      >
        <IconButton onClick={()=>props.setShowSignUp(false)} sx={{p:'0',position:'absolute',zIndex:'1',top:'-15px',right:'-15px',background:'#000',"&:hover":{background:'#d82a2a'}}}>
          <CloseRounded sx={{color:'#fff',width:'30px',height:'30px'}}/>
        </IconButton>
        <Typography variant="h2">Đăng Ký</Typography>
        <Stack sx={{ flexDirection: "row" }}>
          <FormControl sx={{ m: 1, width: "25ch" ,flexGrow:'1'}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-user">Email</InputLabel>
            <InputBase id="outlined-adornment-user" placeholder="Email" />
            <FormHelperText sx={{ height: "20px" }}></FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" ,flexGrow:'1' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Họ và Tên
            </InputLabel>
            <InputBase id="outlined-adornment-password" placeholder="Họ và tên" />
            <FormHelperText sx={{ height: "20px" }}></FormHelperText>
          </FormControl>
        </Stack>
        <Stack sx={{ flexDirection: "row" , mb:'15px'}}>
          <FormControl sx={{ m: 1, width: "25ch" ,flexGrow:'1' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-user">
              Số điện thoại
            </InputLabel>
            <InputBase id="outlined-adornment-user" placeholder="Số điện thoại" />
            <FormHelperText sx={{ height: "20px" }}></FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" ,flexGrow:'1' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-user">
              Tên Công Ty
            </InputLabel>
            <InputBase id="outlined-adornment-user" placeholder="Tên Công Ty" />
            <FormHelperText sx={{ height: "20px",color:'rgb(255, 65, 108)' }}>gsg</FormHelperText>
          </FormControl>
        </Stack>
        <FormControl required fullWidth sx={{marginBottom:'30px'}}>
          <InputLabel id="select-product-label">Sản phẩm bạn quan tâm</InputLabel>
          <Select
            labelId="select-product-label"
            id="select-product"
            value={age}
            sx={{
              borderRadius: "30px",
              boxShadow:
                `inset -2px -2px 6px rgba(255,255,255,0.1),
                inset 2px 2px 6px rgba(0,0,0,0.8)`,
              color: "#fff",
              
              ".MuiOutlinedInput-notchedOutline": { border: 'none' },
            }}
            onChange={handleChange}
          >
            <MenuItem value={1}>OTeam</MenuItem>
            <MenuItem value={2}>OHrm</MenuItem>
            <MenuItem value={3}>OFinance</MenuItem>
            <MenuItem value={4}>OInventory</MenuItem>
            <MenuItem value={5}>OBussiness</MenuItem>
          </Select>
        </FormControl>
        <FormControl required fullWidth sx={{marginBottom:'30px'}}>
          <InputLabel id="select-product-label">Vị trí công việc</InputLabel>
          <Select
            labelId="select-product-label"
            id="select-product"
            value={age}
            sx={{
              borderRadius: "30px",
              boxShadow:
                `inset -2px -2px 6px rgba(255,255,255,0.1),
                inset 2px 2px 6px rgba(0,0,0,0.8)`,
              color: "#fff",
              
              ".MuiOutlinedInput-notchedOutline": { border: 'none' },
            }}
            onChange={handleChange}
          >
            <MenuItem value={1}>CEO/Founder/Chủ tịch</MenuItem>
            <MenuItem value={2}>Giám đốc (CFO,CTO,GD nhân sự, VP)</MenuItem>
            <MenuItem value={3}>Quản lý (Mangager)</MenuItem>
            <MenuItem value={4}>Nhân viên (Staff)</MenuItem>
            <MenuItem value={5}>Học sinh/sinh viên (Student)</MenuItem>
            <MenuItem value={6}>Vị trí khác (Other)</MenuItem>
          </Select>
        </FormControl>
        <Stack sx={{flexDirection:'row',gap:'10px'}}>
            <FormControl required fullWidth sx={{flexGrow:'1'}}>
              <InputLabel id="select-product-label">Tỉnh/Thành phố</InputLabel>
             <Select
                labelId="select-product-label"
                id="select-product"
               value={age}
                sx={{
                 borderRadius: "30px",
                 boxShadow:
                    `inset -2px -2px 6px rgba(255,255,255,0.1),
                   inset 2px 2px 6px rgba(0,0,0,0.8)`,
                 color: "#fff",
                
                  ".MuiOutlinedInput-notchedOutline": { border: 'none' },
               }}
                onChange={handleChange}
             >
               <MenuItem value={1}>Khu vực miền Bắc</MenuItem>
                <MenuItem value={2}>Khu vực miền Trung</MenuItem>
               <MenuItem value={3}>Khu vực miền Nam</MenuItem>
              </Select>
            </FormControl>
            <FormControl required fullWidth sx={{flexGrow:'1'}}>
              <InputLabel id="select-product-label">Quy mô nhân sự</InputLabel>
             <Select
                labelId="select-product-label"
                id="select-product"
               value={age}
                sx={{
                 borderRadius: "30px",
                 boxShadow:
                    `inset -2px -2px 6px rgba(255,255,255,0.1),
                   inset 2px 2px 6px rgba(0,0,0,0.8)`,
                 color: "#fff",
                
                  ".MuiOutlinedInput-notchedOutline": { border: 'none' },
               }}
                onChange={handleChange}
             >
               <MenuItem value={1}>1-15 nhân sự</MenuItem>
               <MenuItem value={2}>16-30 nhân sự</MenuItem>
               <MenuItem value={3}>31-60 nhân sự</MenuItem>
               <MenuItem value={4}>61-100 nhân sự</MenuItem>
               <MenuItem value={5}>101-200 nhân sự</MenuItem>
               <MenuItem value={6}>201-500</MenuItem>
               <MenuItem value={7}>501-1000</MenuItem>
               <MenuItem value={8}>Hơn 1000 nhân sự</MenuItem>
              </Select>
            </FormControl>
        </Stack>
        <Button variant="contained">Đăng Ký</Button>
      </Box>
    </Stack>
  );
}

export default SignUp;
