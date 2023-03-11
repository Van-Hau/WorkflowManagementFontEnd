import {
    Box,
    Button,
    Checkbox,
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
} from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Tech from '@/images/home/tech.jpg';
import SignInImage from '@/images/home/signin.svg';
import SignUpImage from '@/images/home/signup.svg';
import { useMediaQuery } from 'react-responsive';
import { InputOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { authApi } from '@/api/auth-api';
import { classesSignPage } from 'mocks';
const generateClassName = createGenerateClassName({
    productionPrefix: 'c',
});

function SignUp_In() {
    const [product, setProduct] = useState('');
    const [email, setEmail] = useState('');
    const [nameSignIn, setNameSignIn] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSignIn, setPasswordSignIn] = useState('');
    const [positionWork, setPositionWork] = useState('');
    const [district, setDistrict] = useState('');
    const [scaleWork, setScaleWork] = useState('');
    const handleChangeProduct = (e: any) => {
        setProduct(e.target.value);
    };
    const [position, setPosition] = useState('');
    const handleChangePosition = (e: any) => {
        setPosition(e.target.value);
    };

    // const [scale, setScale] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [singUp, setSingUp] = useState<'sign-up-mode' | ''>('');
    const [singUp2, setSignUp2] = useState<'sign-up-mode2' | ''>('');
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)',
    });
    const isTablet = useMediaQuery({
        query: '(max-width: 1224px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 786px)',
    });
    const handleSingUp = () => {
        setSingUp('sign-up-mode');
    };
    const handleSingUp2 = () => {
        setSignUp2('sign-up-mode2');
    };
    const handleSingin = () => {
        setSingUp('');
    };
    const handleSingin2 = () => {
        setSignUp2('');
    };
    const handleRegister = async () => {
        //         "company": "string",
        //   "district": "string",
        //   "email": "string",
        //   "fullName": "string",
        //   "password": "string",
        //   "phone": "string",
        //   "positionWord": "string",
        //   "scale": 0
        const payload: any = {
            company: company,
            district: district,
            email: email,
            password: password,
            phone: phone,
            positionWord: positionWork,
            scale: parseInt(scaleWork),
            fullName: name,
        };
        try {
            const { data } = await authApi.signUp(payload);
        } catch (error) {
            console.log('error', error);
        }

        // console.log(email)
        // console.log(name)
        // console.log(company)
        // console.log(phone)
        // console.log(position)
        // console.log(scaleWork)
        // console.log(district)
    };
    const handleLogin = async () => {
        const payload = {
            username: nameSignIn,
            password: passwordSignIn,
        };
        try {
            const { data } = await authApi.login(payload);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StylesProvider generateClassName={generateClassName} injectFirst>
            <Stack
                sx={[
                    {
                        width: '100vw',
                        height: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    isMobile ? classesSignPage.mobile : isTablet ? classesSignPage.tablet : {},
                ]}
            >
                <Stack className={`container ${singUp} ${singUp2}`} sx={classesSignPage.container}>
                    <Stack sx={classesSignPage.formContainer}>
                        <Box component="form">
                            <Typography variant="h2">Đăng Nhập</Typography>
                            <OutlinedInput
                                onChange={(e: any) => setNameSignIn(e.target.value)}
                                value={nameSignIn}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <PersonIcon sx={{ color: '#fff' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Username"
                            />
                            <OutlinedInput
                                onChange={(e: any) => setPasswordSignIn(e.target.value)}
                                value={passwordSignIn}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff sx={{ color: '#fff' }} />
                                            ) : (
                                                <Visibility sx={{ color: '#fff' }} />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Password"
                                type="password"
                            />
                            <Button sx={{ color: '#fff', background: '#000' }} variant="outlined">
                                Đăng Nhập
                            </Button>
                            <Stack flexDirection="row" className="account-text">
                                Chưa có tài khoản ?{' '}
                                <Typography
                                    onClick={handleSingUp2}
                                    sx={{
                                        color: '#002dff',
                                        cursor: 'pointer',
                                        '&:hover': { color: '#ff0000' },
                                    }}
                                >
                                    {' '}
                                    Đăng ký
                                </Typography>
                            </Stack>
                        </Box>
                        <Box component="form">
                            <Typography variant="h2">Đăng Ký</Typography>
                            <Stack flexDirection="row" gap="10px">
                                <OutlinedInput
                                    placeholder="Email"
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <OutlinedInput
                                    placeholder="Họ và tên"
                                    onChange={(e: any) => setName(e.target.value)}
                                    value={name}
                                />
                            </Stack>
                            <Stack flexDirection="row" gap="10px">
                                <OutlinedInput
                                    placeholder="Số điện thoại"
                                    onChange={(e: any) => setPhone(e.target.value)}
                                    value={phone}
                                />
                                <OutlinedInput
                                    placeholder="Tên Công Ty"
                                    onChange={(e: any) => setCompany(e.target.value)}
                                    value={company}
                                />
                            </Stack>
                            <Stack flexDirection="row" gap="10px">
                                <OutlinedInput placeholder="Mật khẩu" />
                                <OutlinedInput
                                    placeholder="Nhập lại mật khẩu"
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </Stack>
                            <FormControl required fullWidth sx={{ marginBottom: '30px' }}>
                                <Box component="label">Vị trí công việc</Box>
                                <Select
                                    labelId="select-product-label"
                                    id="select-product"
                                    value={positionWork}
                                    onChange={(e: any) => setPositionWork(e.target.value)}
                                >
                                    <MenuItem value={'CEO/Founder/Chủ tịch'}>
                                        CEO/Founder/Chủ tịch
                                    </MenuItem>
                                    <MenuItem value="Giám đốc (CFO,CTO,GD nhân sự, VP)">
                                        Giám đốc (CFO,CTO,GD nhân sự, VP)
                                    </MenuItem>
                                    <MenuItem value={'Quản lý (Mangager)'}>
                                        Quản lý (Mangager)
                                    </MenuItem>
                                    <MenuItem value={'Nhân viên (Staff)'}>
                                        Nhân viên (Staff)
                                    </MenuItem>
                                    <MenuItem value={'Học sinh/sinh viên (Student)'}>
                                        Học sinh/sinh viên (Student)
                                    </MenuItem>
                                    <MenuItem value={'Vị trí khác (Other)'}>
                                        Vị trí khác (Other)
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <Stack sx={{ flexDirection: 'row', gap: '10px', width: '100%' }}>
                                <FormControl required fullWidth sx={{ flexGrow: '1' }}>
                                    <Box component="label">Tỉnh/Thành phố</Box>
                                    <Select
                                        labelId="select-product-label"
                                        id="select-product"
                                        value={district}
                                        onChange={(e: any) => setDistrict(e.target.value)}
                                    >
                                        <MenuItem value={'Khu vực miền Bắc'}>
                                            Khu vực miền Bắc
                                        </MenuItem>
                                        <MenuItem value={'Khu vực miền Trung'}>
                                            Khu vực miền Trung
                                        </MenuItem>
                                        <MenuItem value={'Khu vực miền Nam'}>
                                            Khu vực miền Nam
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl required fullWidth sx={{ flexGrow: '1' }}>
                                    <Box component="label">Quy mô nhân sự</Box>
                                    <Select
                                        labelId="select-product-label"
                                        id="select-product"
                                        value={scaleWork}
                                        onChange={(e: any) => setScaleWork(e.target.value)}
                                    >
                                        <MenuItem value={15}>1-15 nhân sự</MenuItem>
                                        <MenuItem value={30}>16-30 nhân sự</MenuItem>
                                        <MenuItem value={60}>31-60 nhân sự</MenuItem>
                                        <MenuItem value={100}>61-100 nhân sự</MenuItem>
                                        <MenuItem value={200}>101-200 nhân sự</MenuItem>
                                        <MenuItem value={500}>201-500</MenuItem>
                                        <MenuItem value={1000}>501-1000</MenuItem>
                                        <MenuItem value={999999}>Hơn 1000 nhân sự</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Button
                                sx={{ color: '#fff', background: '#000' }}
                                variant="outlined"
                                onClick={handleRegister}
                            >
                                Đăng Ký
                            </Button>
                            <Stack flexDirection="row" className="account-text">
                                Đã có tài khoản ?{' '}
                                <Typography
                                    sx={{
                                        color: '#002dff',
                                        cursor: 'pointer',
                                        '&:hover': { color: '#ff0000' },
                                    }}
                                    onClick={handleSingin2}
                                >
                                    {' '}
                                    Đăng nhập
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack sx={classesSignPage.panel}>
                        <Stack className="panel left-panel">
                            <Stack>
                                <Typography variant="h3">Đã có tài khoản ?</Typography>
                                <Typography>Hãy đăng nhập để trải nghiệm hệ thống</Typography>
                                <Button onClick={handleSingin} variant="contained">
                                    Đăng Nhập
                                </Button>
                            </Stack>
                            <Box component="img" src={SignInImage.src} />
                        </Stack>
                        <Stack className="panel right-panel">
                            <Stack>
                                <Typography variant="h3">Chưa có tài khoản ?</Typography>
                                <Typography>
                                    Đăng ký để tìm hiểu những sản phẩm của công ty
                                </Typography>
                                <Button onClick={handleSingUp} variant="contained">
                                    Đăng Ký
                                </Button>
                            </Stack>
                            <Box component="img" src={SignUpImage.src} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </StylesProvider>
    );
}

export default SignUp_In;
