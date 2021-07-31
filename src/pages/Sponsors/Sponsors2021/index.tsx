import DefaultLayout from '../../layouts/default';
import QuantCo from './quantco_Q_black.png';
import JVentures from './jventures.png';
import './index.css';
import {
  Grid,
  // Button,
  // createMuiTheme,
  // createStyles,
  // makeStyles,
  // responsiveFontSizes,
  // Theme,
  // Link,
  // ThemeProvider,
  Typography,
} from '@material-ui/core';
// import { useTranslation } from 'react-i18next';
const Sponsor2021Page = () => {
  // const { t } = useTranslation(['SponsorsPage']);
  // const classes = useStyles();
  const sponsors = [
    {
      name: 'QuantCo',
      tier: 'Gold',
      description:
        'QuantCo is a fast-growing tech company founded by four Harvard and Stanford graduates. Our global team of quantitative researchers and developers leverages expertise in machine learning, software engineering, and econometrics to develop solutions for algorithmic pricing, high-dimensional forecasting, and data-driven claims management. Our corporate partners are some of the largest insurance, e-commerce, and healthcare organizations in the world.',
      logo: QuantCo,
      link: 'https://quantco.com',
    },
    {
      name: 'J Ventures',
      tier: 'Gold',
      description:
        'J Ventures is a leading early-stage venture capital firm dedicated to digital and intelligence technology investment. Built from the former Microsoft Ventures China team, we invest in AI core technology and mission critical applications in various industries, such as autonomous driving, smart manufacture, digital retail, smart logistics, digital healthcare, etc. With rich experiences in technology innovation and landing, J Ventures also works with 100 fortune 500 companies to define innovation trends, strategy and landing in various industries. Key members are technology and investment veterans with 15+ work experience at global leading technology companies such as Microsoft, Intel, GE, Huawei etc.',
      logo: JVentures,
      link: 'http://thejiangmen.com',
    },
    {
      name: 'qAImera',
      tier: 'Bronze',
      description: 'qAImera description',
      logo: JVentures,
      link: 'http://qaimera.com/',
    },
  ];

  return (
    <DefaultLayout>
      <div className={`Sponsors2021Page`}>
        <Typography variant="h3">Season 1 Sponsors</Typography>
        {/* <Typography variant="body1"}</Typography> */}
        <div className="sponsors-wrapper">
          {sponsors.map((info) => {
            return (
              <div className="sponsor-card">
                <Grid container>
                  <Grid xs={3} className="logo-wrapper">
                    <a href={info.link} target="_blank" rel="noreferrer">
                      <img src={info.logo} alt={`${info.name} logo`} />
                    </a>
                  </Grid>
                  <Grid xs={9}>
                    <Typography variant="h4" className="company-name">
                      <a href={info.link} target="_blank" rel="noreferrer">
                        <span>{info.name}</span>
                      </a>
                      <span className={`tier ${info.tier}`}>
                        {info.tier} Sponsor
                      </span>
                    </Typography>

                    <Typography variant="body2" className="company-desc">
                      {info.description}
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
export default Sponsor2021Page;
