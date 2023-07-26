import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {  useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({

  color: theme.palette.getContrastText(purple[500]),
  backgroundColor:  theme.palette.ali.main,
  '&:hover': {
    backgroundColor: theme.palette.ali.main,
    scale:"0.99"
  },
}));

const Create = () => {

  const [title ,settitle]= useState("");
  const [price,setprice] = useState(0);
  const navigate =useNavigate();
  return (
    <Box
    autoComplete="off"
    sx={{width:"340px",
      mr:{xs:"200px"},
    ml:{sm:"200px"}}}
    className="border"
    component="form"
    
    >
        <TextField
        onChange={(eo) => {
          settitle(eo.target.value)
        }}
        fullWidth={true}
          label="Transaction Title"
          sx={{ mt:"1px", display:"block"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
          }}
          variant="filled"
        />
    <TextField
            onChange={(eo) => {
              setprice(Number(eo.target.value))
            }}
            fullWidth={true}
          label=" Amount"
          type="number"
          sx={{ mt:"22px", display:"block"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />


<ColorButton onClick={(params) => {
  fetch("http://localhost:3500/mydata", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({price , title})
  }).then(()=>{
    navigate("/home")
  })
}} sx={{mt:"22px"}} variant="contained">
  Submit <NavigateNextIcon/>
  </ColorButton>
  

    </Box>
  );
};

export default Create ;
