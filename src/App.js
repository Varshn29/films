import './App.css';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p><strong style={{ marginBottom: '50px' }}>BEST</strong></p>
        <img src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" width='250' height='150' />
        <p><strong>FILMS</strong></p>
      </header>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Link to={`/film-list`}>
          <Card sx={{ mt: '200px', width: '300px', height: '300px', textAlign: 'center', bgcolor: '#11374d', color: 'white' }} >
            <Typography sx={{ fontSize: '20px', mt: '20px' }}>Click here for list of movies</Typography>
            <CardMedia component="img"
              sx={{ mt: '20px' }}
              image={"https://i.gifer.com/8V9H.gif"}></CardMedia>
          </Card>
        </Link>
      </Box>
      <marquee direction='left' style={{ marginTop: '40px' }}>
        <small style={{ color: 'white' }}><i>*Movies *TV shows *Web-Series</i></small>
      </marquee>
    </div >
  );
}

export default App;
