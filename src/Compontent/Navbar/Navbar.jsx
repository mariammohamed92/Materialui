import React from 'react'
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
//import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';



const drawerWidth = 240;



const Navbar = (props  ) =>  {

  

  const currentLocation = useLocation();
  const theme = useTheme();

  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const myList =[
    {text:"Home" , icon:<HomeRoundedIcon /> , path:"/home"},
    {text:"Create" , icon:<CreateIcon />, path:"/"},
    {text:"Profile" , icon:<Person2Icon /> , path:"/profile"},
    {text:"Settings" , icon:<SettingsIcon /> , path:"/settings"},
  
  ]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (

<div>

      
<List >

      <nav aria-label="main mailbox folders">
      <List >

          {myList.map((item) => {
            return(

              <ListItem key={item.text} sx={{ bgcolor:currentLocation.pathname === item.path ? theme.palette.roma.main : null,
              }}  disablePadding >

              <ListItemButton onClick={()=>{ navigate(item.path);}} >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            );
          })}

<ListItem disablePadding sx={{
            bgcolor:currentLocation.pathname === "/logout" ? theme.palette.roma.main : null,
          }} >
          <ListItemButton onClick={()=>{
              navigate("//https://www.google.com.eg/?hl=ar")
          }} >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
        
        </List>

    </nav>
  
</List>
<Divider />

</div>
);

 const container = window !== undefined ? () => window().document.body : undefined
  

  return (
    <>
 <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/' 
        color='inherit' 
        sx={{flexGrow:1 , "&:hover" : {fontSize:"20px" , color:"white"  }}} 
        underline="none"  me={4}> 
        My expenses </Link>
        <Typography 
         mr={2} 
         
         variant="body5"
         >
            Mariam Mohamed</Typography> 

      <Avatar alt="Mariam Mohamed" src="../../../public/images/unnamed.jpg"/>
       
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
     
      
    </Box>
  </Box>

  </>
)
}

Navbar.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
 window: PropTypes.func,
};


export default Navbar 




/*
همسح ال Listitem 
وبدل ما اكتبهم اربع مرات هعمل ماب عليهم
افضل وكده هقلل في الكود وهبكون منظم اكتر 
وعملت بدلها ماب قبل الريتيرن 
اللى كانو موجودين هما دول 
       <ListItem  sx={{
            bgcolor:currentLocation.pathname === "/" ? theme.palette.roma.main : null,
          }}
          disablePadding >
      <ListItemButton onClick={() => {
            navigate ("/")

      }} >
            <ListItemIcon>
            <HomeRoundedIcon />
              </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding   sx={{
            bgcolor:currentLocation.pathname === "/create" ? theme.palette.roma.main : null,
          }}>
          <ListItemButton onClick={()=>{
             navigate("/create")
          }} >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{
            bgcolor:currentLocation.pathname === "/profile" ? theme.palette.roma.main : null,
          }}>
          <ListItemButton onClick={()=>{
             navigate("/profile")
          }}>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{
            bgcolor:currentLocation.pathname === "/settings" ? theme.palette.roma.main : null,
          }}>
          <ListItemButton onClick={()=>{
              navigate("/settings")
          }}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

*/