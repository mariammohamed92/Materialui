import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import {Box} from '@mui/material';
//import { useState } from 'react';
//import { ThemeProvider , createTheme } from '@mui/material/styles';
//import CssBaseline from '@mui/material/CssBaseline';



const drawerWidth = 240;

const Layout  = ()  => {

  /*const[myMode,setmyMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: myMode,
        
      ali:{
        main:"#647488",
        conttrastText:"#fff"
      }
    },
  });
  <ThemeProvider theme={darkTheme}>
     <CssBaseline />
      </ThemeProvider>
*/
  return (
    <>



      <div>

        <Navbar drawerWidth={drawerWidth} />
              
            <Box componant="main" sx={{ml: `${drawerWidth}px` , display:"flex" ,justifyContent:"center", mt:"66px"}}>

    <Outlet  />
    </Box>
      </div>

      
    </>
  )
}


export default Layout
