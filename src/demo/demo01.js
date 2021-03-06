import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function SimpleContainer() {
  const [count, setCount] = useState(0);
  const [coutboy, setCountboy] = useState(0);
  const [coutgirl, setCountgrirl] = useState(0);
  const [max, setMax] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      address: "HN",
      gender: "0",
      phone: "0988773243",
      hob: ["TV", "GAME"],
      dob: 2001,
      age: 19,
      username: "Phuong",
    },
    {
      id: 2,
      address: "HP",
      gender: "1",
      phone: "123",
      hob: ["FOOD", "READ"],
      dob: 1997,
      age: 24,
      username: "Giang",
    },
    {
      id: 3,
      address: "GN",
      gender: "0",
      phone: "123",
      hob: ["TV", "GAME"],
      dob: 1997,
      age: 25,
      username: "Hung",
    },
  ]);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    console.log(data);
    setCount(data.length);

    let boy = 0;
    let girl = 0;
    data.map((element) => {
      if (element.gender === "1") {
        girl = girl + 1;
      } else if (element.gender === "0") {
        boy = boy + 1;
      }
    });

    let max = data.reduce(function (a, b) {
      return { dob: Math.min(a.dob, b.dob) };
    });
    console.log("max", max.dob);
    console.log("boy", boy);
    console.log("girl", girl);
    setCountboy(boy);
    setCountgrirl(girl);
    setMax(max.dob);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        maxHeight="sm"
        style={{
          margin: "40px auto",
          backgroundColor: "#cfe8fc",
          height: "auto",
          padding: "40px",
        }}
      >
        <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
          Đăng nhập
        </Typography>
        <Input
          type="text"
          name="text"
          // onChange={handleChangeInput}
          placeholder="Input"
          fullWidth={true}
          style={{ height: "40px", background: "#ffffff", padding: "0 15px" }}
        />
        <Button
          onClick={handleClick}
          href="#"
          style={{ width: "100%", marginTop: "20px" }}
          variant="contained"
        >
          Login
        </Button>
        <Typography>{"co"} {count} {"mang"}</Typography>
        <Typography>{coutboy } {"boy"}</Typography>
        <Typography>{coutgirl} {"girl"}</Typography>
        <Typography>{"cao nhat:"} {max} </Typography>
      </Container>
    </React.Fragment>
  );
}
