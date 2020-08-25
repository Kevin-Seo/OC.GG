import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ff6666',
    display: 'flex',
    width: '1600px',
  },
  con1: {
    backgroundColor: 'yellow',
    width: '600px',
  },
  con2: {
    backgroundColor: 'red',
    width: '400px',
  }
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
      <Container maxWidth="xl" disableGutters className={classes.container}>
        <Container maxWidth="xl" disableGutters className={classes.con1}>
          <span> 111 </span>
        </Container>
        <Container maxWidth="xl" disableGutters className={classes.con2}>
          <span> 222 </span>
        </Container>
        <Container maxWidth="xl" disableGutters className={classes.con1}>
          <span> 111 </span>
        </Container>
      </Container>
    </div>
  )
}

export default Main
