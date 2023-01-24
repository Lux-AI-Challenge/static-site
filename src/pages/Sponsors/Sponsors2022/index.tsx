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
      description:
        'J Ventures is a leading early-stage venture capital firm dedicated to digital and intelligence technology investment. Built from the former Microsoft Ventures China team, we invest in AI core technology and mission critical applications in various industries, such as autonomous driving, smart manufacture, digital retail, smart logistics, digital healthcare, etc. With rich experiences in technology innovation and landing, J Ventures also works with 100 fortune 500 companies to define innovation trends, strategy and landing in various industries. Key members are technology and investment veterans with 15+ work experience at global leading technology companies such as Microsoft, Intel, GE, Huawei etc.',
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
