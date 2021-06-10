import React from 'react';
import {
  TextField,
  Card,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Snackbar,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3686FF',
    },
    secondary: {
      main: '#C08000',
    },
    text: {
      primary: '#000',
    },
  },
});
theme = responsiveFontSizes(theme);
const SignupForm = () => {
  const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      cardWrapper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      },
      card: {
        width: '24rem',
        color: 'black',
        margin: 'auto',
        padding: '2rem',
      },
      text: {
        color: 'black',
        width: '100%',
        marginBottom: '1rem',
      },
      submit: {
        width: '100%',
      },
    });
  });
  const { t } = useTranslation(['SignupForm']);
  const classes = useStyles();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let f = new FormData(e.target as HTMLFormElement);
    fetch(
      'https://us-central1-lux-ai-test.cloudfunctions.net/mailchimp-signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(f)),
        redirect: 'follow',
      }
    )
      .then((res) => {
        if (res.ok) {
          return { ...res.json(), ok: true };
        }
        return res.json();
      })
      .then((res) => {
        if (res.ok) {
          notify('Succesfully signed up, check your inbox!');
        } else {
          // this should be done server side later
          if (
            JSON.parse(JSON.parse(res.error).response.text).title ===
            'Member Exists'
          ) {
            notify('Already signed up!');
          } else {
            notify('An error ocurred');
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [openNotif, setOpenNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState('');
  const notify = (msg: string) => {
    setNotifMessage(msg);
    setOpenNotif(true);
  };
  const handleClose = () => {
    setOpenNotif(false);
  };

  return (
    <div className={classes.cardWrapper}>
      <ThemeProvider theme={theme}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openNotif}
          onClose={handleClose}
          autoHideDuration={6000}
        >
          <Alert onClose={handleClose} severity="info">
            {notifMessage}
          </Alert>
        </Snackbar>
        <Card className={classes.card}>
          <Typography>Please provide the following: </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.text}
              label={t('email')}
              color="primary"
              name="email"
              required
            />
            <TextField
              className={classes.text}
              color="primary"
              name="firstName"
              label={t('name')}
              required
            />
            {/* <TextField
              className={classes.text}
              name="github"
              label={t('github')}
              color="primary"
            /> */}
            <Button className={classes.submit} type="submit" color="primary">
              Sign Up
            </Button>
          </form>
        </Card>
      </ThemeProvider>
    </div>
  );
};
export default SignupForm;
