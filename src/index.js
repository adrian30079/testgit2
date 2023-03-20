import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Album from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Notes from './Note';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import Font from './Theme';
import { ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     typography: {
//       h1: {
//         fontSize: {
//           xs: '3rem',
//           sm: '4rem',
//           md: '5rem',
//           lg: '6rem',
//           xl: '7rem',
//         },
//       },
//     },
//   });

const theme = createTheme(Font);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
    <div>
        <ThemeProvider theme={Font}>
            <Album />
            <Notes />
            <Typography variant="h1" sx={{ fontSize: theme.typography.h1.fontSize }}> Hello World Testing Text</Typography>
            <h2>Top folder</h2>
        </ThemeProvider>
    </div>
 );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
