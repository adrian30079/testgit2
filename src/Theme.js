import React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

  const Font = createTheme({
    typography: {
      h1: {
        fontSize: {
          xs: '3rem',
          sm: '4rem',
          md: '5rem',
          lg: '6rem',
          xl: '7rem',
        },
      },
    },
  });

export default Font;