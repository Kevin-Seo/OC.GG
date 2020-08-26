import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  boxMain: {
    // backgroundColor: 'green',
    width: '1080px',
    margin: '0 auto',
  },
  titleContainer: {
    marginTop: '50px',
  },
  title: {
    backgroundColor: 'green',
    // width: 1080 / 2 = 540px
    height: '200px',
  },
  infoContainer: {
    marginTop: '50px',
  },
  info: {
    backgroundColor: 'green',
    height: '50px',
  },
  adContainer: {
    marginTop: '50px',
  },
  ad: {
    backgroundColor: 'red',
    height: '300px',
  },
}));

const callAPIstart = () => {
  setTimeout(() => {
    console.log('test');
    axios({
      method: 'get',
      url: '/',
      baseURL: 'http://localhost:3000',
    }).then((res) => {
      console.log(res);
    });
    callAPIstart();
  }, 5000);
}

const Main = () => {
  const classes = useStyles();

  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
    callAPIstart();
  }, []);

  return (
    <div>
      <Box className={classes.boxMain}>
        <Grid container className={classes.titleContainer}>
          <Grid item xs={3} />
          <Grid item xs={6} className={classes.title}>
            title image
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container className={classes.infoContainer}>
          <Grid item xs={3} />
            <Grid item xs={6} className={classes.info}>
              info message
            </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container className={classes.adContainer}>
          <Grid item xs={3} />
            <Grid item xs={6} className={classes.ad}>
              Advertisement #1
            </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container className={classes.adContainer}>
          <Grid item xs={3} />
            <Grid item xs={6} className={classes.ad}>
              Advertisement #2
            </Grid>
          <Grid item xs={3} />
        </Grid>

        <Button variant="contained">
          <Link to="/Play">
            Next Page
          </Link>
        </Button>
      </Box>
    </div>
  )
}

export default Main
