import './Home.css';
import React , { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import { useTheme } from '@mui/material/styles';


const Home= () =>  {

  const [mydata ,setmydata]= useState([]);

  //const theme = useTheme();

  useEffect (() => {
    fetch("http://localhost:3500/mydata")
    .then((response) => response.json())
    .then((data) => setmydata(data) );
  },[]);

  
 let  totleprice= 0;
  return <>
  <Box  >
{mydata.map((item) => {
  totleprice += item.price
return(

  <Paper  
  
  key={item.id}
  
    sx={{
      position:"relative",
      width:"340px",
      display:"flex",
      justifyContent:"space-between",
      mt:"1px",
      mb:"10px",
      pt:"15px",
      pb:"7px",
      //width: {xs:"340px",sm:"340px",md:"340px"},
      mr:{xs:"200px"},
      ml:{sm:"200px"}

  
    }}
   >
<Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant='h6'>Food </Typography>

<Typography
 sx={{
  mr:"33px", 
  fontSize:"1.4em",
  fontWeight:"500",
  opacity:"0.5",
  }} variant='h6'>$1000  </Typography>
    <Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant='h6'>{item.title} </Typography>

    <Typography
     sx={{
      mr:"33px", 
      fontSize:"1.4em",
      fontWeight:"500",
      opacity:"0.5",
      }} variant='h6'>${item.price}  </Typography>


      <IconButton onClick={()=>{
        fetch(`http://localhost:3500/mydata/${item.id}` , {method:"DELETE",
      });
      const newarray = mydata.filter((myObject)=>{
            return myObject.id !== item.id
      })
      setmydata(newarray)
      }} 
      sx={{position:"absolute" , top:"0" , right:"0"}}>
        <CloseIcon/>
      </IconButton>
    
    




    </Paper>
)
})}


<Typography variant="h6" textAlign="center" mt="22px">&#128073; you spend ${totleprice}</Typography>
  </Box>
  
  </>
  
}

export default Home;

