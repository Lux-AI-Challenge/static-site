import DefaultLayout from '../layouts/default';
import SignupForm from '../../components/SignupForm';
import Planet from './planet.svg';
import Planet2 from './planet2.svg';
// import FacebookSVG from './facebook.svg';
// import GoogleSVG from './google.svg';
import DiscordSVG from './discord.svg';
import GithubSVG from './github.svg';
import './index.css';
import { HashLink } from 'react-router-hash-link';
import {
  Button,
  createMuiTheme,
  createStyles,
  makeStyles,
  responsiveFontSizes,
  Theme,
  Link,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
  // const night = new Date().getHours() > 16;
  const night = false;
  const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      homePage: {
        backgroundColor: '#00AFBD',
      },
      splash: {
        backgroundColor: night ? '#2C2E33' : '#00AFBD',
      },
      // socialsGroup: {
      //   marginTop: '1.5rem',
      // },
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
    });
  });
  const { t } = useTranslation(['Home']);
  const classes = useStyles();

  return (
    <DefaultLayout>
      <div className={`${classes.homePage} HomePage`}>
        <div className={`splash ${classes.splash}`}>
          <div className="backdrop-wrapper">
            {night ? (
              <img src={Planet2} className={`backdrop`} alt="backdrop" />
            ) : (
              <img src={Planet} className={`backdrop`} alt="backdrop" />
            )}
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
                  <HashLink to="#signup">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.signupBtn}
                    >
                      {t('Sign Up')}
                    </Button>
                  </HashLink>
                </div>
                <div>
                  {/* <Button
                    variant="contained"
                    color="secondary"
                    className={classes.loginBtn}
                  >
                    {t('Login')}
                  </Button> */}
                </div>
              </div>
            </ThemeProvider>
            <div className="socials">
              {[
                { svg: DiscordSVG, link: 'https://discord.gg/DZSm47VHMz' },
                { svg: GithubSVG, link: 'https://github.com/Lux-AI-Challenge' },
              ].map(({ svg, link }) => {
                return (
                  <a href={link} target="blank" key={link}>
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
          <section id="about">
            <Typography variant="h4">{t('sec1.title')}</Typography>
            <Typography variant="body1">{t('sec1.body1')}</Typography>
            <Typography variant="body1">{t('sec1.body2')}</Typography>
            <Typography variant="body1">{t('sec1.body3')}</Typography>
            <Typography variant="body1">
              {t('sec1.body4')}{' '}
              <Link href="https://halite.io/" target="blank" color="secondary">
                Halite
              </Link>
              ,{' '}
              <Link
                href="https://terminal.c1games.com/"
                target="blank"
                color="secondary"
              >
                Terminal
              </Link>
              ,{' '}
              <Link
                href="https://battlecode.org/"
                target="blank"
                color="secondary"
              >
                Battlecode
              </Link>
              ,{' '}
              <Link
                href="http://ants.aichallenge.org/"
                target="blank"
                color="secondary"
              >
                AI Challenge
              </Link>
            </Typography>
            <Typography variant="body1">{t('sec1.body5')}</Typography>
          </section>
          <section>
            <Typography variant="h4">{t('details.title')}</Typography>
            <Typography variant="h6">{t('details.title1')}</Typography>
            <Typography variant="body1">{t('details.body1')}</Typography>
            <Typography variant="h6">{t('details.title2')}</Typography>
            <Typography variant="body1">{t('details.body2')}</Typography>
            <Typography variant="h6">{t('details.title3')}</Typography>
            <Typography variant="body1">{t('details.body3')}</Typography>
            {/* <Typography variant="body1">
              Discord:{' '}
              <Link
                href="https://discord.gg/DZSm47VHMz"
                color="secondary"
                target="blank"
              >
                https://discord.gg/DZSm47VHMz
              </Link>{' '}
              - {t('details.disc')}
            </Typography> */}
            <Typography variant="h6">{t('details.title4')}</Typography>
            <Typography variant="body1">{t('details.body4')}</Typography>
            <Typography variant="h6">{t('details.title5')}</Typography>
            <Typography variant="body1">{t('details.body5')}</Typography>
            <Typography variant="h6">{t('details.title6')}</Typography>
            <Typography variant="body1">{t('details.body6')}</Typography>
          </section>
          <section id="tournament-schedule">
            <Typography variant="h4">
              {t('tournament-schedule.title')}
            </Typography>
            <Typography variant="h6">
              {t('tournament-schedule.title1')}
            </Typography>
            <Typography variant="body1">
              {t('tournament-schedule.body1')}
            </Typography>
            <Typography variant="h6">
              {t('tournament-schedule.title2')}
            </Typography>
            <Typography variant="body1">
              {t('tournament-schedule.body2')}
            </Typography>
          </section>
          <section id="contact">
            <Typography variant="h4">{t('contact.title')}</Typography>
            <Typography variant="body1">
              {t('contact.body1-1')}{' '}
              <Link
                href="https://discord.gg/DZSm47VHMz"
                color="secondary"
                target="blank"
              >
                https://discord.gg/DZSm47VHMz
              </Link>{' '}
              {t('contact.body1-2')}
            </Typography>
            <Typography variant="body1">{t('contact.body2')}</Typography>
          </section>
          <section id="partners">
            <Typography variant="h4">{t('partner.title')}</Typography>
            <Typography variant="body1">{t('partner.body1')}</Typography>
          </section>
          <section id="sponsor">
            <Typography variant="h4">{t('sponsor.title')}</Typography>
            <Typography variant="body1">{t('sponsor.body1')}</Typography>
          </section>
          <section id="signup">
            <Typography variant="h4">{t('signup.title')}</Typography>
            <Typography variant="body1">{t('signup.body1')}</Typography>
            <SignupForm />
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};
export default HomePage;
