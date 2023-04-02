import React from 'react';
import './App.css';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CssBaseline,
  CardContent,
  Grid,
  Button,
  ToolBar,
  Container,
  Toolbar,
  CardMedia,
} from "@mui/material";
import { PhotoCamera } from '@mui/icons-material';
import useStyles from './Style';

const cards =[1,2,3,4,5,6,7,8,9]

const App = () => {
  const classes = useStyles();

  
  return (
    <> 
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icons}/>
          <Typography variant='h6'>Best Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container} >
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h4' align='center' color="textSecondary" paragraph>
              this is very long text to show you how long paragraphs is shown in material ui
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Button variant="contained" color='primary' sx={{m:2}}>
                  See Photo Album{""}
                </Button>
                <Button variant="contained" color='secondary'>
                  do what you need{""}
                </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.CardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                   />
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant='h6'>Heading</Typography>
                    <Typography gutterBottom variant='h6'>this is description</Typography>
                    <CardActions>
                      <button size="small" color='success'>
                        views
                      </button>
                      <button size="small" color='success'>
                        downloads
                      </button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
               ))}
              
            </Grid>
          </container>
        </div>
      </main>
    </>
  );
}

export default App;
