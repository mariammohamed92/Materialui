import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Compontent/Layout/Layout";
import Home from "../src/Compontent/Home/Home";
import Create from "./Compontent/Create/Create";
import Settings from "./Compontent/Settings/Settings";
import Profile from './Compontent/Profile/Profile';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import getDesignTokens from './Style/Usetheme';
import NotFound from './Compontent/NotFound/NotFound';
//import { grey } from '@mui/material/colors';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



 function App() {


  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      
       
      }}
    >

      <IconButton sx={{  mr:{md:1,sm:2 },pt:7}} onClick={colorMode.toggleColorMode} color="inherit" >
        {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ color:"orange"}} /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

  export default function ToggleColorMode() {
    const [mode, setMode] = React.useState(localStorage.getItem("currentMode"));
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          localStorage.setItem("currentMode" ,theme.palette.mode=== 'light' ? 'dark' : 'light');
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }), [],);
  
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  let routes = createBrowserRouter([{
    path: '/', element: <Layout />,
    children: [
      {  path: 'home', element: <Home /> },
      {  index: true, element: <Create /> },
      { path: 'profile', element: <Profile />},
      {path: 'settings', element: <Settings /> },
      //{ path: 'logout', element: <Logout /> },
      {path:'*' ,element:<NotFound/>},

    ]
  }])
  
  return (
    <>
        <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}>
        <App />
        <RouterProvider router={routes} />

      </ThemeProvider>
    </ColorModeContext.Provider>


    </>
  );
  };
