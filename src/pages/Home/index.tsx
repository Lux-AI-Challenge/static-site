import DefaultLayout from '../layouts/default';
import Planet from './planet.svg';
import FacebookSVG from './facebook.svg';
import GoogleSVG from './google.svg';
import GithubSVG from './github.svg';
import './index.css';
import {
  Button,
  createMuiTheme,
  createStyles,
  makeStyles,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialsGroup: {
      marginTop: '1.5rem',
    },
    buttonGroup: {
      marginTop: '1.5rem',
    },
    signupBtn: {
      borderRadius: '1.5rem',
      marginBottom: '1rem',
    },
    loginBtn: {
      borderRadius: '1.5rem',
      textTransform: 'none',
    },
  })
);
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3686FF',
    },
    secondary: {
      main: '#C08000',
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
const HomePage = () => {
  const { t } = useTranslation(['Home']);
  const classes = useStyles();
  return (
    <DefaultLayout>
      <div className="HomePage">
        <div className="splash">
          <div className="backdrop-wrapper">
            <img src={Planet} className="backdrop" alt="backdrop" />
          </div>
          <div className="splash-text">
            <Typography variant="h3" color="textPrimary">
              {t('title')}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className="subtitle"
            >
              {t('subtitle')}
            </Typography>
            <ThemeProvider theme={theme}>
              <div className={classes.buttonGroup}>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.signupBtn}
                  >
                    {t('Sign Up')}
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.loginBtn}
                  >
                    {t('Login')}
                  </Button>
                </div>
              </div>
            </ThemeProvider>
            <div className={classes.socialsGroup}>
              {[
                { svg: GoogleSVG, link: 'https://github.com/Lux-AI-Challenge' },
                { svg: GithubSVG, link: 'https://github.com/Lux-AI-Challenge' },
              ].map(({ svg, link }) => {
                return (
                  <a href={link} target="blank">
                    <Button>
                      <img src={svg} alt="social-logo" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <main className="container">
          <section>
            <Typography variant="h4">{t('sec1.title')}</Typography>
            <Typography variant="body1">{t('sec1.body1')}</Typography>
            <Typography variant="body1">{t('sec1.body2')}</Typography>
            <Typography variant="body1">{t('sec1.body3')}</Typography>
            <Typography variant="body1">{t('sec1.body4')}</Typography>
          </section>
          <section>
            <Typography variant="h4">{t('details.title')}</Typography>
            <Typography variant="body1">{t('details.body1')}</Typography>
            <Typography variant="body1">{t('details.body2')}</Typography>
            <Typography variant="body1">{t('details.body3')}</Typography>
            <Typography variant="body1">{t('details.body4')}</Typography>
            <Typography variant="body1">{t('details.body5')}</Typography>
            <Typography variant="body1" style={{ marginBottom: 0 }}>
              {t('details.tschedule.1')}
            </Typography>
            <ul className="tourney-list">
              {[2, 3, 4].map((i) => {
                return (
                  <li>
                    <Typography variant="body1">
                      {t('details.tschedule.' + i)}
                    </Typography>
                  </li>
                );
              })}
            </ul>
            <Typography variant="body1">{t('details.body7')}</Typography>
            <Typography variant="body1">{t('details.body8')}</Typography>
            <Typography variant="body1">{t('details.body9')}</Typography>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};
export default HomePage;
