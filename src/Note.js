import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid, Card, CardMedia } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: '#0035F0', 
      light: '#5753FE',
      dark: '#0028DD',
      contrastText: '#fff',
      p50: '#F3F1FF',
      p100: '#D5D4FF',
      p200: '#A6A5FF',
      p300: '#7C71FF',
      p400: '#5753FE',
      p500: '#0035F0',
      p600: '#2537F4',
      p700: '#002CE4',
      p800: '#0028DD',
      p900: '#0A21A9',
    },
    secondary: {
      main: '#c5555b', 
    },
    grey: {
      50: "#FFFFFF",
      100: "#F9F9F9",
      200: "#F4F4F4",
      300: "#E5E5E5",
      400: "#C1C1C1",
      500: "#A3A3A3",
      600: "#797979",
      700: "#666666",
      800: "#4747",
      900: "#262626",
    },
    myColors: {
      color1: '#c5555b',
      color2: '#789abc',
      color3: '#def123',
    },
  },
  typography: {
    body1: {
      fontSize: {
        xs: "12px",
        sm: "20px",
        md: "26px",
      }
    },
    h2: {
      fontSize: {
        xs: "22pt",
        sm: "32pt",
        md: "48pt",
        lg: "64pt",
        xl: "80pt"
        },
      lineHeight: {
        xs: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "80pt"
      },
      fontWeight: 400
    },
  },
});


const MyComponent = () => {
  return (
    <Grid container spacing={{
      xs: theme.spacing(2),
      sm: theme.spacing(3),
      md: theme.spacing(4),
      lg: theme.spacing(5),
      xl: theme.spacing(6),
    }}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia 
            component="img"
            height="200px"
            image="https://prod-images.viu.com/3046493022/8d68ab169c34c6ee4a9e90d1aadb87336504cd1f?im=Resize,width=540"
            alt="img1"
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          My Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ipsum id ex ultricies, sit amet hendrerit enim fermentum. Donec consequat mi a faucibus dictum. Mauris vulputate ex id gravida faucibus. Nam eu dolor tellus. 
        </Typography>
      </Grid>
    </Grid>
  );
}


export default function Notes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      {/* <Typography
      variant="h1"
      color="primary"
      align='center'
      >
    cvasf3wq4
    </Typography> */} 
    {/* comment out Key = Crtl + "/" */}
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="lg">
            <Typography
            //noWrap = make the text truncate when reaches the browser width
              noWrap
              variant="h2" sx={{ fontSize: theme.typography.h2.fontSize }}
              //color="secondary"
              //color="theme.palette.myColors.color1"
              color="myColors.color1"
              style={{ backgroundColor: theme.palette.myColors.color2 }}
              >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Box sx={{ bgcolor: theme.palette.primary.p400 , height: '200px' }} />
            <Box sx={{
                      width: 300,
                      height: 300,
                      backgroundColor: 'primary.dark',
                      '&:hover': {
                        backgroundColor: 'myColors.color1',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }} />
            <Box component="span" sx={{ p: 4, border: '2px dashed #D5D4FF', margin: 4 }}>
              <Button>Save</Button>
            </Box>
          </Container>
          <MyComponent />
      </React.Fragment>
    </ThemeProvider>
    </div>
  )
}