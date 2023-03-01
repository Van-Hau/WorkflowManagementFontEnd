import * as React from 'react';
import { MainLayout } from '@/components/common'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
  Stack,
} from "@mui/material";
import  { Fragment, useState } from "react";
import Man from "@/images/home/man.png";
import Curve from "@/images/home/curve.png";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ListReason from "@/components/home/ListReason";
import Login from "@/components/home/Login";
import SignUp from "@/components/home/SignUp";
import SwiperMulti from "@/components/home/SwiperMulti";
import Product from "@/components/home/Product";
import OryzaTeam from '@/images/home/OryzaTeam.jpg'
import Alarm from '@/images/home/alarm.png'
import Parking from '@/images/home/parking.png'
import { listMenu } from 'mocks'
const useStyleTablet :any= makeStyles({
  section: {
    flexDirection:'column',
    paddingTop: "150px ",
    height: "auto",
    "&>div:first-of-type": {
      maxWidth: "100%",
    },
    "&>div:last-child img": {
      marginTop: "0",
    },
  },
});
const useStyleMobile = makeStyles({
  header: {
    padding: "20px 50px",
  },
  section: {
    flexDirection: "column",
    padding: "150px 50px 100px",
    height: "auto",
    "&>div:first-of-type h3": {
      fontSize: "40px",
      color: "#fff",
    },
    "&>div:first-of-type p": {
      fontSize: "16px",
    },
    "&>div:first-of-type a": {
      position: "relative",
      marginTop: "10px",
      display: "inline-block",
      fontSize: "16px",
      letterSpacing: "2px",
      padding: "10px 25px",
      borderRadius: "40px",
    },
  },
});

export interface IDemoPAgeProps {
}
const listProduct=[
    {
      title:'ORYZA Team',
      content:`Phần mềm giúp theo dõi các công việc một cách trực quan, 
      chuyên nghiệp. Số hóa, hệ thống hóa các giấy tờ, 
      quy trình của công ty một cách đơn giản, 
      trực quan trên hệ thống giúp nâng cao hiệu quả công việc.`,
      image:OryzaTeam,
      best:true,
    },
    {
      title:'SMART PARKING',
      content:`Dựa trên công nghệ AI và thiết bị phần cứng tiên tiến.
       Oryza phát triển bộ giải pháp tổng thể quản lý bãi xe thông minh
        với thiết kế đơn giản về thiết bị, tối ưu về chi phí, áp dụng giải pháp Cloud để quản lý thiết bị nhằm tối ưu hóa việc sử dụng, giúp khách hàng 
        dễ dàng sử dụng và lắp đặt với kết nối Plug and Play (cắm và chạy)
      `,
      image:Parking,
      best:false,
    },
    {
      title:'OBox Alarms',
      content:`Alarm Box là thiết bị báo động thông minh do Oryza phát 
      triển nhằm đáp ứng nhu cầu cảnh báo, báo động khi được kích hoạt,
       giúp người sử dụng thực hiện thao tác gọi điện thoại báo tin hoặc
        truyền tải hình ảnh một cách nhanh nhất của mình đến người nhận.`,
      image:Alarm,
      best:false,
    },

  ]

export default function DemoPAge (props: IDemoPAgeProps) {
    const classesTablet = useStyleTablet();
    const classesMobile = useStyleMobile();
      const [showLogin, setShowLogin] = useState(false);
      const handleClickShowLogin = () => setShowLogin((show) => !show);
      const [showSignUp, setShowSignUp] = useState(false);
      const handleClickShowSignUp = () => {setShowSignUp((show) => !show)};
     
      const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)",
      });
      const isTablet = useMediaQuery({
        query: "(max-width: 1224px)",
      });
    
      const isMobile = useMediaQuery({
        query: "(max-width: 786px)",
      });
      return (
        <Stack
          sx={{
            fontFamily: "Roboto,sans-serif",
            bgcolor: "#312747",
            position: "relative",
            "*": { boxSizing: "border-box" },
          }}
        >
          <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
          <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
          <Stack
            className={isMobile ? classesMobile.header : ""}
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              p: "40px 50px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: "10",
            }}
          >
            <Link
              href="#"
              underline="none"
              sx={{
                position: "relative",
                color: "#fff",
                fontSize: "28px",
                fontWeight: "500",
              }}
            >
              Brand Name
            </Link>
            <Stack sx={{ position: "relative", justifySelf: "center" }}>
              <List sx={{ position: "relative", display: "flex" }}>
                {listMenu.map((item, i) => {
                  return (
                    <ListItem
                      key={i}
                      component="a"
                      href="#"
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#fff",
                        fontSize: "18px",
                        "&:hover": { color: "#ff0083" },
                      }}
                    >
                      {item}
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between">
              <Button onClick={handleClickShowLogin} variant="outlined" color="secondary" sx={{ mr: "10px" }}>
                Đăng Nhập
              </Button>
              <Button onClick={handleClickShowSignUp} variant="contained" color="secondary">
                {" "}
                Đăng Ký
              </Button>
            </Stack>
          </Stack>
          <Stack
            className={
              isMobile
                ? classesMobile.section
                : isTablet
                ? classesTablet.section
                : ""
            }
            sx={{
              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 100px",
              flexDirection: "row",
              minHeight: "100vh",
            }}
          >
            <img
              src={Curve.src}
              style={{ position: "absolute", bottom: "0", right: "0" }}
            />
            <Stack sx={{ position: "relative", maxWidth: "600px", zIndex: "1000" }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontSize: "50px",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Nền tảng quản trị doanh nghiệp toàn diện
              </Typography>
              <Typography
                gutterBottom
                sx={{ fontSize: "18px", color: "#fff", mb: "20px" }}
              >
                Quản lý tập trung tất cả các dữ liệu và thông tin liên quan đến hoạt
                động của doanh nghiệp.
              </Typography>
              <Stack flexDirection="row" justifyContent="flex-start" gap={2}>
                <Link
                  sx={{
                    width: "fit-content",
                    mt: "10px",
                    display: "inline-block",
                    background: "#ff0083",
                    color: "#fff",
                    fontSize: "20px",
                    letterSpacing: "2px",
                    p: "15px 35px",
                    borderRadius: "40px",
                  }}
                  variant="body2"
                  href="#"
                  underline="none"
                >
                  Đăng Ký Ngay
                </Link>
                <Link
                  sx={{
                    width: "fit-content",
                    mt: "10px",
                    display: "inline-block",
                    background: "#fff",
                    color: "#ff0083",
                    fontSize: "20px",
                    letterSpacing: "2px",
                    p: "15px 35px",
                    borderRadius: "40px",
                  }}
                  variant="body2"
                  href="#"
                  underline="none"
                >
                  Liên Hệ Tư Vấn
                </Link>
              </Stack>
            </Stack>
            <Box>
              <img
                style={{
                  position: "relative",
                  maxWidth: "500px",
                  width: "100%",
                  marginTop: "100px",
                  zIndex: "2",
                }}
                src={Man.src}
              />
            </Box>
          </Stack>
          <ListReason />
          <SwiperMulti/>
          <Stack>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2em",
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#fff",
                  paddingTop:'30px',
                  textTransform: 'uppercase',
                  m:'0 20px'
                }}
              >
                Tại sao nên sử dụng Oryza ERP ?
                <Divider sx={{"&::before,&::after":{
                  borderTop: 'thin solid rgba(255, 255, 255, 0.7)'
                }}}>
                    <Chip label='MORE' color="primary"/>
                </Divider>
              </Typography>
                {listProduct.map((item,i)=>
                    {
                    if(i!=listProduct.length-1) return(
                      <Fragment key={i}>
                          <Product lessDesktop={isTablet} title={item.title} isBest={item.best} content={item.content} image={item.image}/>
                          <Divider sx={{
                            border: 'thin solid rgba(255, 255, 255, 0.2)'
                          }}>
                          </Divider>
                      </Fragment>
                    )
                    return <Product key={i} lessDesktop={isTablet} title={item.title} isBest={item.best} content={item.content} image={item.image}/>
                  }
                )}
          </Stack>
        </Stack>
      );
    
    }