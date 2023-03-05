import { Box, Button, Checkbox, FormControl, FormHelperText, IconButton, InputAdornment, InputBase, InputLabel, Link, MenuItem, OutlinedInput, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import {useEffect,useState} from 'react';
import { makeStyles } from "@mui/styles";
import Tech from "@/images/home/tech.jpg"
import SignInImage from "@/images/home/signin.svg"
import SignUpImage from "@/images/home/signup.svg"
import { useMediaQuery } from "react-responsive";
import { InputOutlined, Visibility, VisibilityOff} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
const useStyle = makeStyles((theme?: any) => ({

    container: {
        position:'relative',
        width:'70%',
        height:'80%',
        background:'#fff',
        borderRadius:'15px',
        overflow:'hidden',
        boxShadow:'0 4px 20px 0 rgba(0,0,0,0.3), 4px 20px 0 rgba(0,0,0,0.3)',
        "&.sign-up-mode::before":{
            transform:'translateX(-5%)'
        },
        "&.sign-up-mode .right-panel img,&.sign-up-mode .right-panel>div":{
            transform:'translateX(200%)'
        },
        "&.sign-up-mode .left-panel img,&.sign-up-mode .left-panel>div":{
            transform:'translateX(0)'
        },
        "&.sign-up-mode form:first-of-type":{
            opacity:'0'
        },
        "&.sign-up-mode form:last-of-type":{
            opacity:'1'
        },
        "&.sign-up-mode .right-panel":{
            pointerEvents:'none'
        },
        "&.sign-up-mode .left-panel":{
            pointerEvents:'all'
        },
        "& button:hover":{
            color:'#000 !important',
            background:'#fff !important',
            fontWeight:'600'
        },
        "&::before":{
            content:"''",
            position:'absolute',
            top:'0',
            left:'-50%',
            transform:'translateX(100%)',
            width:'100%',
            height:'100%',
            background:'linear-gradient(-45deg,#df3adf,#520852)',
            zIndex:6,
            transition:'1s ease-in-out'
        },
        
    },
        formContainer:{
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            zIndex:5,
            "& form":{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                width:'40%',
                minWidth:'238px',
                padding:'0 10px',
                

            },
            "& form:first-of-type":{
                opacity:'1',
                transition:'0.5s ease-in-out',
                transitionDelay:'1s',
                gap:'15px',
                transform:'translateX(7.5%)'
            },
            "& form:last-of-type":{
                opacity:'0',
                transition:'0.5s ease-in-out',
                transitionDelay:'0.5s',
                gap:'10px',
                width:'50%'
            },
            "& form .account-text":{
                display:'none'
            },
            "& h2":{
                fontSize:'35px',
                color:'#000',
                fontWeight:'600',

                marginBottom:'20px'
            },
            "& button":{
                marginTop:'15px',
                padding:'5px 30px'
            },
            "& a":{
                color:'#002dff',
            },
            "& a:hover":{
                color:'#ff0000'
            },
            "& label":{
                fontSize:'14px',
            },
            "& svg":{
                color:'#000',
            },
            "& .MuiFormControl-root":{
                margin:'0'
            },
            "& input":{
                padding:'16.5px 14px',
                borderRadius: "30px",
            }},
        panel:{
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            "& .panel":{
                zIndex:6,
                alignItems:'center',
                justifyContent:'center',
                width:'35%',
                textAlign:'center',
                gap:'30px'
            },
            "& .panel>div:first-of-type":{
                color:'#fff',
                transition:'1.1s ease-in-out',
                transitionDelay:'0.5s'
            },
            "& .panel h3":{
                fontSize:'24px',
                fontWeight:'600'
            },
            "& .panel button":{
                color:'#fff',
                background:'#000'
            },
            "& .panel p":{
                fontSize:'15px',
                padding:'10px 0'
            },
            "& img":{
                width:'100%',
                transition:'1.1s ease-in-out',
                transitionDelay:'0.4s'
            },
            "& a":{
                color:'#113cff'
            },
            "& a:hover":{
                color:'#ff0000'
            },
            "& .left-panel":{
                pointerEvents:'none',
                transform:'translate(-7.5%)'
            },
            "& .left-panel img,& .left-panel>div":{
                transform:'translateX(-200%)'
            },
            "& .right-panel img,& .right-panel>div":{
                transform:'translateX(0)'
            },
            
        },
        tablet:{
            width:'calc(100vw - 48px)',
            height:'100vh',
            "& .container":{
                width:'100%',
                height:'100%'
            }
        },
        mobile:{
            "& .container::before":{
                display:'none'
            },
            "& form":{
                width:'80% !important'
            },
            "& form .account-text":{
                display:'block'
            },
            "& form:last-of-type":{
                display:'none',
            },
            "& form:first-of-type":{
                transform:'translateX(0)'
            },
            "& .container.sign-up-mode2 form:last-of-type":{
                display:'flex',
                opacity:'1'
            },
            "& .container.sign-up-mode2 form:first-of-type":{
                display:'none'
            },
            "& .container>div:last-of-type":{
                display:'none'
            }
        }
    
}));

function SignUp_In() {
    const classes = useStyle();
    const [product, setProduct] = useState("");
    const handleChangeProduct = (e:any) => {
      setProduct(e.target.value);
    };
    const [position, setPosition] = useState("");
    const handleChangePosition = (e:any) => {
      setPosition(e.target.value);
    };
    const [area, setArea] = useState("");
    const handleChangeArea = (e:any) => {
      setArea(e.target.value);
    };
    const [scale, setScale] = useState("");
    const handleChangeScale = (e:any) => {
      setScale(e.target.value);
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)",
      });
      const isTablet = useMediaQuery({
        query: "(max-width: 1224px)",
      });
    
      const isMobile = useMediaQuery({
        query: "(max-width: 786px)",
      });
    useEffect(() => {
        const sign_in_btn=document.querySelector("#sign-in-btn");
        const sign_up_btn=document.querySelector("#sign-up-btn");
        const container=document.querySelector(".container");
        const sign_in_btn2=document.querySelector("#sign-in-btn2");
        const sign_up_btn2=document.querySelector("#sign-up-btn2");
        sign_up_btn?.addEventListener("click",()=>{
            container?.classList.add("sign-up-mode");
        })
        sign_in_btn?.addEventListener("click",()=>{
            container?.classList.remove("sign-up-mode");
        })
        sign_up_btn2?.addEventListener("click",()=>{
            container?.classList.add("sign-up-mode2");
            
        })
        sign_in_btn2?.addEventListener("click",()=>{
            container?.classList.remove("sign-up-mode2");
        })
      }, []);
    
  return (
<Stack className={isMobile?classes.mobile:isTablet?classes.tablet:''} sx={{width:'100vw',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'}} >
    <Stack className={`container ${classes.container}`}>
           <Stack className={classes.formContainer}>
                <Box component='form'>
                    <Typography variant='h2'>Đăng Nhập</Typography>
                    <OutlinedInput
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end">
                            <PersonIcon sx={{color:'#fff'}}/>
                          </IconButton>
                        </InputAdornment>
                      }
                    placeholder='Username'/>
                    <OutlinedInput
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
                    placeholder='Password' type='password'/>
                    <Button sx={{color:'#fff',background:'#000'}} variant='outlined'>Đăng Nhập</Button>
                    <Typography className='account-text'>Chưa có tài khoản ? <Link href='#' id='sign-up-btn2'>Đăng ký</Link></Typography>
                </Box>
                <Box component='form'>
                    <Typography variant='h2'>Đăng Ký</Typography>
                    <Stack flexDirection='row' gap='10px'>
                        <OutlinedInput placeholder="Email" />
                        <OutlinedInput placeholder="Họ và tên" />
                    </Stack>
                    <Stack flexDirection='row' gap='10px'>
                        <OutlinedInput  placeholder="Số điện thoại" />
                        <OutlinedInput placeholder="Tên Công Ty" />
                    </Stack>
                    <FormControl required fullWidth sx={{marginBottom:'30px'}}>
                        <Box component='label'>Sản phẩm bạn quan tâm</Box>
                        <Select
                            labelId="select-product-label"
                            id="select-product"
                            value={product}
                            
                            onChange={handleChangeProduct}
                        >
                            <MenuItem value={1}>OTeam</MenuItem>
                            <MenuItem value={2}>OHrm</MenuItem>
                            <MenuItem value={3}>OFinance</MenuItem>
                            <MenuItem value={4}>OInventory</MenuItem>
                            <MenuItem value={5}>OBussiness</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl required fullWidth sx={{marginBottom:'30px'}}>
                        <Box component='label'>Vị trí công việc</Box>
                        <Select
                            labelId="select-product-label"
                            id="select-product"
                            value={position}
                            
                            onChange={handleChangePosition}
                        >
                            <MenuItem value={1}>CEO/Founder/Chủ tịch</MenuItem>
                            <MenuItem value={2}>Giám đốc (CFO,CTO,GD nhân sự, VP)</MenuItem>
                            <MenuItem value={3}>Quản lý (Mangager)</MenuItem>
                            <MenuItem value={4}>Nhân viên (Staff)</MenuItem>
                            <MenuItem value={5}>Học sinh/sinh viên (Student)</MenuItem>
                            <MenuItem value={6}>Vị trí khác (Other)</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack sx={{flexDirection:'row',gap:'10px',width:'100%'} }>
                        <FormControl required fullWidth sx={{flexGrow:'1'}}>
                            <Box component='label'>Tỉnh/Thành phố</Box>
                            <Select
                                labelId="select-product-label"
                                id="select-product"
                            value={area}
                                
                                onChange={handleChangeArea}
                            >
                            <MenuItem value={1}>Khu vực miền Bắc</MenuItem>
                                <MenuItem value={2}>Khu vực miền Trung</MenuItem>
                            <MenuItem value={3}>Khu vực miền Nam</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl required fullWidth sx={{flexGrow:'1'}}>
                            <Box component='label'>Quy mô nhân sự</Box>
                            <Select
                                labelId="select-product-label"
                                id="select-product"
                            value={scale}
                                
                                onChange={handleChangeScale}
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
                    <Button sx={{color:'#fff',background:'#000'}} variant='outlined'>Đăng Ký</Button>
                    <Typography className='account-text'>Đã có tài khoản ? <Link href='#' id='sign-in-btn2'>Đăng nhập</Link></Typography>
                </Box>
           </Stack>
           <Stack className={classes.panel}>
                <Stack className='panel left-panel'>
                    <Stack>
                        <Typography variant='h3'>Đã có tài khoản ?</Typography>
                        <Typography>Hãy đăng nhập để trải nghiệm hệ thống</Typography>
                        <Button id='sign-in-btn' variant='contained'>Đăng Nhập</Button>
                    </Stack>
                    <Box component='img' src={SignInImage.src}/>
                </Stack>
                <Stack className='panel right-panel'>
                    <Stack>
                        <Typography variant='h3'>Chưa có tài khoản ?</Typography>
                        <Typography>Đăng ký để tìm hiểu những sản phẩm của công ty</Typography>
                        <Button id='sign-up-btn' variant='contained'>Đăng Ký</Button>
                    </Stack>
                    <Box component='img' src={SignUpImage.src}/>
                </Stack>
           </Stack>
    </Stack>
</Stack>
  )
}

export default SignUp_In