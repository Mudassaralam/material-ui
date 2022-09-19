import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Leftsidebar from '../Leftsidebar/Leftsidebar';
import Rightsidebar from '../Rightsidebar/Rightbar';
import Feed from '../Feed/Feed';
function App() {
  return (
   <>
    <Grid container >
      <Grid item sm={2} xs={2}>
      <Leftsidebar />
      </Grid>
      <Grid item sm={7} xs={10}>
      <Feed />
      </Grid>
      <Grid item sm={3}>
      <Rightsidebar/>
      </Grid>
    </Grid>
   </>
  );
}

export default App;
