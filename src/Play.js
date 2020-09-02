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
  myChampContainer: {
    backgroundColor: 'green',
    paddingTop: 20,
    paddingBottom: 20,
  },
  myChampItemImage: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 'solid',
    borderWidth: '2px 2px 2px 2px',
    height: 150,
  },
  myChampItem: {
    textAlign: 'center',
    border: 'solid',
    borderWidth: '2px 2px 2px 0px',
    height: 150,
  },
  myChampBoxTop: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 'solid',
    borderWidth: '0px 0px 2px 0px',
  },
  myChampBoxBottom: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4.5),
    textAlign: 'center',
  },
  myChampMoreContainer: {
    marginTop: 20,
  },
  myChampMoreLeft: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 'solid',
    borderWidth: '2px 2px 2px 2px',
    // height: 150,
  },
  myChampMoreOthers: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 'solid',
    borderWidth: '2px 2px 2px 0px',
    // height: 150,
  },
  enemy1Container: {
    backgroundColor: 'green',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  enemy1ImageItem: {
    backgroundColor: 'blue',
    height: 90,
  },
  enemy1BasicItem: {
    backgroundColor: 'red',
  },
  enemy1BasicBox: {
    float: 'left',
  },
  enemy1BasicBoxTop: {
    backgroundColor: 'gray',
    marginLeft: 20,
    width: 70,
    height: 70,
    textAlign: 'center',
  },
  enemy1BasicBoxBottom: {
    backgroundColor: 'white',
    marginLeft: 20,
    width: 70,
    height: 20,
    textAlign: 'center',
  },
  enemy1ComboContainer: {
    backgroundColor: 'red',
    marginTop: 20,
  },
  enemy1ComboBox: {
    float: 'left',
  },
  enemy1ComboBoxTop: {
    backgroundColor: 'gray',
    marginLeft: 20,
    width: 70,
    height: 70,
    textAlign: 'center',
  },
  enemy1ComboBoxBottom: {
    backgroundColor: 'white',
    marginLeft: 20,
    width: 70,
    height: 20,
    textAlign: 'center',
  },
  enemy1Total: {
    backgroundColor: 'yellow',
  }
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

        <Grid container className={classes.myChampContainer}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2} className={classes.myChampItemImage}>
                image
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  레벨
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  공격력
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  룬
                 </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  패시브
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  Q
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  W
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  E
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.myChampItem}>
                <Box className={classes.myChampBoxTop}>
                  R
                </Box>
                <Box className={classes.myChampBoxBottom}>
                  test2
                </Box>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
          <Grid item xs={1} />

          <Grid container className={classes.myChampMoreContainer}>
            <Grid item xs={1} />
            <Grid item xs={4} className={classes.myChampMoreItem}>
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={2} className={classes.myChampMoreLeft}>
                  E1
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E2
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E3
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E4
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E5
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={2} className={classes.myChampMoreLeft}>
                  E2
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E3
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E4
                </Grid>
                <Grid item xs={2} className={classes.myChampMoreOthers}>
                  E5
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      
        <Grid container className={classes.enemy1Container}>
          <Grid container>
            <Grid item xs={1} className={classes.enemy1ImageItem}>
              aa
            </Grid>
            <Grid item xs={11} className={classes.enemy1BasicItem}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  A
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  P
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Q
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  E
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  R
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Rune
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container className={classes.enemy1Container}>
          <Grid container>
            <Grid item xs={1} className={classes.enemy1ImageItem}>
              aa
            </Grid>
            <Grid item xs={11} className={classes.enemy1BasicItem}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  A
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  P
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Q
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  E
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  R
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Rune
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.enemy1Container}>
          <Grid container>
            <Grid item xs={1} className={classes.enemy1ImageItem}>
              aa
            </Grid>
            <Grid item xs={11} className={classes.enemy1BasicItem}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  A
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  P
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Q
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  E
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  R
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Rune
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.enemy1Container}>
          <Grid container>
            <Grid item xs={1} className={classes.enemy1ImageItem}>
              aa
            </Grid>
            <Grid item xs={11} className={classes.enemy1BasicItem}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  A
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  P
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Q
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  E
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  R
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Rune
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.enemy1Container}>
          <Grid container>
            <Grid item xs={1} className={classes.enemy1ImageItem}>
              aa
            </Grid>
            <Grid item xs={11} className={classes.enemy1BasicItem}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  A
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  P
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Q
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  E
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  R
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  Rune
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container className={classes.enemy1ComboContainer}>
            <Grid item xs={10}>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1ComboBox}>
                <Box className={classes.enemy1ComboBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1ComboBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.enemy1Total}>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
              <Box className={classes.enemy1BasicBox}>
                <Box className={classes.enemy1BasicBoxTop}>
                  W
                </Box>
                <Box className={classes.enemy1BasicBoxBottom}>
                  123
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Play
