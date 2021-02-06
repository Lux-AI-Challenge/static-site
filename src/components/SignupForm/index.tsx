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
} from '@material-ui/core';
import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
// https://us-central1-lux-ai-test.cloudfunctions.net/mailchimp-signup?email=stonezt2019@gmail.com&firstName=stone2&lastName=tao&github=abcdef

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
  typography: {
    button: {
      fontSize: 18,
      width: '16rem',

      color: 'inherit',
      textTransform: 'none',
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
      },
      submit: {
        marginTop: '1rem',
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
        body: f,
      }
    );
  };
  return (
    <div className={classes.cardWrapper}>
      <ThemeProvider theme={theme}>
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
              name="name"
              label={t('name')}
              required
            />
            <TextField
              className={classes.text}
              name="github"
              label={t('github')}
              color="primary"
            />
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
