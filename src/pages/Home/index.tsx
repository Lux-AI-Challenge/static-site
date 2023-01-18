import DefaultLayout from '../layouts/default';
import Planet from './planet.svg';
import Planet2 from './planet2.svg';
import TwitterSVG from './twitter.svg';
import DiscordSVG from './discord.svg';
import EmailSVG from './email.svg';
import DiscordCircleSVG from './discord-circ.svg';
import VideoSVG from './video.svg';
import CityInfoSVG from './cityinfo.svg';
import ContactWorkersSVG from './workers.svg';
import GithubSVG from './github.svg';
import './index.css';
import {
  Button,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
const HomePage = () => {
  // const night = new Date().getHours() > 16;
  const night = false;
  const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      homePage: {
        // backgroundColor: '#00AFBD',
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
    <DefaultLayout day>
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
            <div className="socials">
              {[
                { svg: DiscordSVG, link: 'https://discord.gg/DZSm47VHMz' },
                { svg: GithubSVG, link: 'https://github.com/Lux-AI-Challenge' },
                { svg: TwitterSVG, link: 'https://twitter.com/LuxAIChallenge' },
              ].map(({ svg, link }) => {
                return (
                  <a href={link} target="_blank" rel="noreferrer" key={link}>
                    <IconButton className="social-icon">
                      <img src={svg} alt={'Icon linked to socials'} />
                    </IconButton>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="gradient"></div>
        <main className="container">
          <section id="about">
            <Typography variant="h4">{t('sec1.title')}</Typography>
            <Typography variant="body1">
              <div dangerouslySetInnerHTML={{ __html: t('sec1.body1') }}></div>
            </Typography>
            <Typography variant="body1">{t('sec1.body2')}</Typography>
            <Typography variant="body1">{t('sec1.body3')}</Typography>
            <Typography variant="body1">{t('sec1.body4')} </Typography>
            <Typography variant="body1">{t('sec1.body5')}</Typography>
          </section>
          <section>
            <Typography variant="h4">{t('details.title')}</Typography>
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{ __html: t('details.body0') }}
              ></div>
            </Typography>
            <Typography variant="h6">{t('details.title1')}</Typography>
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{ __html: t('details.body1') }}
              ></div>
            </Typography>
            <Typography variant="h6">{t('details.title2')}</Typography>
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{ __html: t('details.body2') }}
              ></div>
            </Typography>
            <Typography variant="h6">{t('details.title3')}</Typography>
            <Typography variant="body1">{t('details.body3')}</Typography>
            <div className="video-art-wrapper">
              <img src={VideoSVG} className={`video-art`} alt="art" />
            </div>
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
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{ __html: t('details.body4') }}
              ></div>
            </Typography>
            <Typography variant="h6">{t('details.title5')}</Typography>
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{ __html: t('details.body5') }}
              ></div>
            </Typography>
            <Typography variant="h6">{t('details.title6')}</Typography>
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{ __html: t('details.body6') }}
              ></div>
            </Typography>
          </section>
          <br />
          <div className="video-art-wrapper">
            <img src={CityInfoSVG} className={`video-art`} alt="art" />
          </div>
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
          </section>
          <section id="partners">
            <Typography variant="h4">{t('partner.title')}</Typography>
            <Typography variant="body1">{t('partner.body1')}</Typography>
          </section>
          <section id="sponsor">
            <Typography variant="h4">{t('sponsor.title')}</Typography>
            <Typography variant="body1">{t('sponsor.body1')}</Typography>
          </section>
          <div className="contact-art-wrapper">
            <img src={ContactWorkersSVG} className={`contact-art`} alt="art" />
          </div>
          <section id="contact">
            <Typography variant="h4">{t('contact.title')}</Typography>
            {/* <Typography variant="body1">
              {t('contact.body1-1')}{' '}
              <Link
                href="https://discord.gg/DZSm47VHMz"
                color="secondary"
                target="blank"
              >
                https://discord.gg/DZSm47VHMz
              </Link>{' '}
              {t('contact.body1-2')}
            </Typography> */}
            {/* #F9EFE2 */}
            <Typography variant="body1">{t('contact.body1')}</Typography>
            <Typography variant="body1">{t('contact.body2')}</Typography>
            <div className="contact-footer">
              <a
                href="https://discord.gg/DZSm47VHMz"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <img src={DiscordCircleSVG} className="logo" alt="logo" />
                </Button>
              </a>
              <a
                href="mailto:hello@lux-ai.org"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <img src={EmailSVG} className="logo" alt="logo" />
                </Button>
              </a>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};
export default HomePage;
