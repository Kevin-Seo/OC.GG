import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const axios = require('axios');

const theme = createMuiTheme({
  body: {
    fontFamily: 'Do Hyeon',
  },
});

const useStyles = makeStyles((theme) => ({
  bgcolor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#5599ff',
    zIndex: -1000,
  },
  boxMain: {
    // backgroundColor: 'green',
    width: '1080px',
    margin: '0 auto',
  },
  titleContainer: {
    marginTop: '50px',
  },
  title: {
    // backgroundColor: 'green',
    // height: '200px',
  },
  paperTitle: {
    padding: theme.spacing(5),
    textAlign: 'center',
    fontSize: '10em',
    // color: theme.palette.text.secondary,
  },
  infoContainer: {
    marginTop: '50px',
  },
  info: {
    // backgroundColor: 'green',
    padding: theme.spacing(0),
  },
  paperInfo: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  aniInfo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
  },
  adContainer: {
    marginTop: '50px',
  },
  ad: {
    backgroundColor: 'green',
    // height: '300px',
  },
  paperAd: {
    padding: theme.spacing(10),
    textAlign: 'center',
    backgroundColor: 'yellow',
  },
  btnTest: {
    backgroundColor: 'red',
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
      <div className={classes.bgcolor}> </div>
      <Box className={classes.boxMain}>
        <Grid container className={classes.titleContainer}>
          <Grid item xs={3} />
          <MuiThemeProvider theme={theme}>
          <Grid item xs={6} className={classes.title}>
            <Paper className={classes.paperTitle}> OC.GG </Paper>
          </Grid>
          </MuiThemeProvider>
          <Grid item xs={3} />
        </Grid>
        <Grid container className={classes.infoContainer}>
          <Grid item xs={3} />
            <Grid item xs={6} className={classes.info}>
              <Skeleton variant='rect' width={540} className={classes.aniInfo}>
                {/* <Paper className={classes.paperInfo}> ... 게임 시작을 기다리는 중 ... </Paper> */}
                ... 게임 시작을 기다리는 중 ...
              </Skeleton>
            </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container className={classes.adContainer}>
          <Grid item xs={3} />
            <Grid item xs={6} className={classes.ad}>
              <Paper className={classes.paperAd}>
                Advertisement #1
              </Paper>
            </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container className={classes.adContainer}>
          <Grid item xs={3} />
            <Grid item xs={6} className={classes.ad}>
            <Paper className={classes.paperAd}>
                Advertisement #2
              </Paper>
            </Grid>
          <Grid item xs={3} />
        </Grid>

        <Button variant="contained" className={classes.btnTest}>
          <Link to="/Play">
            Next Page (Test용)
          </Link>
        </Button>
      </Box>
    </div>
  )
}

export default Main
