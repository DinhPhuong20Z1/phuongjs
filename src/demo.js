import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export default function SimpleContainer() {
    const [data, setData] = useState({
        username: "",
        password: "",
        checked: false,
        select: 2
      });
      const handleSelect = (e) => {
        const value = e.target.value;
        // console.log(value)
        setData({ ...data, select: value });
      };
      const handleChangeUsername = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: value });
      };
      const handleChangePassword = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: value });
      };
      const handleChangeChecked = (e) => {
        const value = e.target.checked;
        const name = e.target.name;
        setData({ ...data, [name]: value });
      };
      
      console.log(data);
      const handleClick = (e) => {
        console.log(data)
      }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" maxHeight="sm" style={{margin:'40px auto', backgroundColor: '#cfe8fc', height: 'auto', padding: '40px'}}>
        <Typography  variant="h2" gutterBottom style={{ textAlign:'center' }} >
            Đăng nhập
        </Typography>
        <Input type="text" name="username" value={data.username} onChange={handleChangeUsername} placeholder="Username" fullWidth={true}  style={{height: '40px', background:'#ffffff', marginBottom: '20px', padding: '0 15px'}} />
        <Input type="text" name="password" value={data.password} onChange={handleChangePassword} placeholder="Password" fullWidth={true} style={{height: '40px', background:'#ffffff', padding: '0 15px'}} />
        <div style={{display: 'flex'}}>
            <FormControlLabel name="checked" checked={data.checked} onChange={handleChangeChecked} style={{flex: '1 1 auto'}} control={<Checkbox  />} label="checkbox" />
            <FormControl >
                <InputLabel 
                id="demo-simple-select-label" >Age</InputLabel>
                <Select
                    onChange={handleSelect}
                    value={data.select}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{width:'100px',}}
                    >
                    <MenuItem value="1">Ten</MenuItem>
                    <MenuItem value="2">Twenty</MenuItem>
                    <MenuItem value="3">Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <Button onClick={handleClick}  style={{display: 'inline-flex', width: '100%', marginTop: '20px'}} variant="contained">Login</Button>
      </Container>
    </React.Fragment>
  );
}