import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  boxMain: {
    // backgroundColor: 'green',
    width: 1080,
    margin: '0 auto',
  },
  topContainer: {
    marginTop: 20,
  },
  topItem: {
    // backgroundColor: 'green',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  topTitle: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
    height: 20,
    fontSize: 20,
    color: '#5599ff',
  },
  topPaper: {
    backgroundColor: '#5599ff',
    padding: theme.spacing(2),
    height: 20,
    fontSize: 20,
    color: 'white',
  },
  mainContainer: {
    marginTop: 20,
  },
  myChampItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'dashed',
  },
}));

const Play = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.boxMain}>
        <Grid container className={classes.topContainer}>
          <Grid item xs={3} className={classes.topItem}>
            <Paper className={classes.topTitle}>
              OC.GG
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.topItem}>
            <Paper className={classes.topPaper}>
              게임 진행중
            </Paper>
          </Grid>
          <Grid item xs={3} className={classes.topItem}>
            {/* <Paper className={classes.topPaper}>
              건의사항
            </Paper> */}
          </Grid>
        </Grid>

        <Grid container className={classes.mainContainer}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid container className={classes.myChampContainer}>
              <Grid item xs={1} />
              <Grid item xs={2} className={classes.myChampItem}>
                image
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                11
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                22
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                33
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                44
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                55
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                66
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                77
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                88
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Box>
    </div>
  )
}

export default Play
