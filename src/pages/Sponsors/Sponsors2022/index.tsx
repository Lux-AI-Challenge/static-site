import DefaultLayout from '../../layouts/default';
import './index.css';
import { Grid, Typography } from '@material-ui/core';
import QuantCo from './quantco_Q_black.png';
import TSVCLOGO from './tsvc.png';
import RegressionGamesLogo from './regressiongames_black.png';

const Sponsor2022Page = () => {
  const sponsors: any[] = [
    {
      name: 'QuantCo',
      tier: 'Gold',
      description:
        'QuantCo is a fast-growing tech company founded by four Harvard and Stanford graduates. Our global team of quantitative researchers and developers leverages expertise in machine learning, software engineering, and econometrics to develop solutions for algorithmic pricing, high-dimensional forecasting, and data-driven claims management. Our corporate partners are some of the largest insurance, e-commerce, and healthcare organizations in the world.',
      links: ``,
      logo: QuantCo,
      link: 'https://quantco.com',
    },
    {
      name: 'Regression Games',
      tier: 'Bronze',
      description: `Experience the future of gaming with Regression Games, where AI and gaming collide! Regression Games is building an accessible and enjoyable experience for players to create game AIs, code characters, train models, and compete in their favorite games. Join our community, battle for top spots, earn achievements, and collaborate with friends to earn prizes and ultimate glory!
        <br/>
        We invite you to playtest the Regression Games platform here: https://play.regression.gg/
        <br/>
        Finally, check out our job postings for software engineers - work alongside a team of senior engineers with experience from Riot Games, IBM, and more! https://regression.gg/careers`,
      logo: RegressionGamesLogo,
      links: '',
      link: 'http://regression.gg',
    },
    {
      name: 'TSVC',
      tier: 'Bronze',
      description:
        'Founded in 2010, TSVC is an early-stage VC fund and was the first seed investor in Zoom, Carta, and Ginkgo Bioworks.<br/> - Invested in 230+ startups, 4 IPOs, and 9 Unicorns.<br/> - Areas of investment include DeepTech, Digital Health, Data Economy',
      logo: TSVCLOGO,
      links: `
      Sign up to their newsletter for opportunities <a href='http://eepurl.com/dKm_Tk'>here</a><br/>
      LinkedIn: <a href='https://www.linkedin.com/company/tsvcap/'>https://www.linkedin.com/company/tsvcap/</>`,
      link: 'http://qaimera.com/',
    },
  ];

  return (
    <DefaultLayout>
      <div className={`Sponsors2022Page`}>
        <Typography variant="h3">Season 2 Sponsors</Typography>
        <div className="sponsors-wrapper">
          {sponsors.length === 0 && (
            <Typography variant="h4">To be announced!</Typography>
          )}
          {sponsors.map((info) => {
            return (
              <div className="sponsor-card">
                <Grid container>
                  <Grid item md={3} className="logo-wrapper">
                    <a href={info.link} target="_blank" rel="noreferrer">
                      <img src={info.logo} alt={`${info.name} logo`} />
                    </a>
                  </Grid>
                  <Grid item md={9}>
                    <Typography variant="h4" className="company-name">
                      <a href={info.link} target="_blank" rel="noreferrer">
                        <span>{info.name}</span>
                      </a>
                      <span className={`tier ${info.tier}`}>
                        {info.tier} Sponsor
                      </span>
                    </Typography>

                    <Typography variant="body2" className="company-desc">
                      <div
                        dangerouslySetInnerHTML={{ __html: info.description }}
                      ></div>
                      <div
                        dangerouslySetInnerHTML={{ __html: info.links }}
                      ></div>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Sponsor2022Page;
