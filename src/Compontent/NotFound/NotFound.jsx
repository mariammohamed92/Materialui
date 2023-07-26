import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';

function NotFound() {
    const theme = useTheme();

    return (
    <Box>
        <Typography color={theme.palette.error.main} variant="h4" >
            There is not desgin 
            <br/>
            <br/>
            Please try again later....
        </Typography>
        </Box>
  )
}

export default NotFound