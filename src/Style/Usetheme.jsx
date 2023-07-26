//خاص بلالوان خلينا في فايل لوحده بدل ما كان في app

import { grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
        ? {
            ali:{
                main: '#3f50b5',
            },
            roma:{
                main: grey[400]
            }
            }
        : {
            // palette values for dark mode
            ali:{
                main: "teal",
            },
            roma:{
                main:grey[700]

    }
            }),
        },
    });
    
export default getDesignTokens