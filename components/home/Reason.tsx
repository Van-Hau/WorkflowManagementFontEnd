import { Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton, Typography } from "@mui/material";

const useStyle = makeStyles({
  card: {
    "&": {
      position: "relative",
      width: "240px",
      height: "400px",
      margin: "25px 15px",
      overflow: "hidden",
      background: "#287bff",
      borderRadius: "20px",
      borderBottomLeftRadius: "160px",
      borderBottomRightRadius: "160px",
      boxShadow:
        "0 15px 0 #fff, inset 0 -15px 0 rgba(255,255,255,0.25), 0 45px 0 rgba(0,0,0,0.15)",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: "-140px",
      left: "-40%",
      width: "100%",
      height: "120%",
      background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.2))",
      transform: "rotate(35deg)",
      pointerEvent: "none",
      filter: "blur(5px)",
    },
  },
  icon: {
    "&": {
      position: "relative",
      width: "100px",
      height: "100px",
      background: "#312747",
      borderBottomLeftRadius: "100px",
      borderBottomRightRadius: "100px",
      boxShadow: "0 10px 0 rgba(0,0,0,0.1), inset 0 -8px 0 #fff",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "-50px",
      width: "50px",
      height: "30px",
      background: "transparent",
      borderTopRightRadius: "50px",
      boxShadow: "15px -15px 0 15px #312747",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      top: "0",
      right: "-50px",
      width: "50px",
      height: "50px",
      background: "transparent",
      borderTopLeftRadius: "30px",
      boxShadow: "-15px -15px 0 15px #312747",
    },
    "& svg": {
      color: "#fff",
      position: "relative",
      fontSize: "3em",
      zIndex: "10000",
    },
  },
  content: {
    "&": {
      position: "absolute",
      width: "100%",
      padding: "30px",
      paddingTop: "140px",
      textAlign: "center",
    },
    "& h2": {
      fontSize: "1.75em",
      color: "#fff",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    "& p": {
      color: "#fff",
      lineHeight: "1.5em",
    },
  },
});
function Reason(props) {
  const classes = useStyle();
  return (
    <Stack
      className={classes.card}
      sx={{
        background: `linear-gradient(to bottom,${props.topColor},${props.bottomColor}) !important`,
      }}
    >
      <Box className={classes.icon}>
        <IconButton>{props.icon && props.icon}</IconButton>
      </Box>
      <Stack className={classes.content}>
        <Typography variant="h2" gutterBottom>
          {props.title}
        </Typography>
        <Typography>{props.content}</Typography>
      </Stack>
      <Stack
        sx={{
          alignSelf: "flex-end",
          position: "absolute",
          paddingBottom: "50px",
        }}
      >
        <Button variant="contained">Xem Thêm</Button>
      </Stack>
    </Stack>
  );
}

export default Reason;
