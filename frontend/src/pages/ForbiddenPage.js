import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  loginLink: {
    fontSize: '1.2rem',
    textAlign: 'center',
    '& > a': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  },
}));

const ForbiddenPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        403 Forbidden
      </Typography>
      <Typography variant="body1" className={classes.message}>
        You do not have permission to access this page.
      </Typography>
      <Typography variant="body1" className={classes.loginLink}>
        Please <Link href="/login">login</Link> to continue.
      </Typography>
    </Container>
  );
};

export default ForbiddenPage;
