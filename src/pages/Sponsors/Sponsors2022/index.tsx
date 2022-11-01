import DefaultLayout from '../../layouts/default';
import './index.css';
import { Grid, Typography } from '@material-ui/core';
const Sponsor2022Page = () => {
  const sponsors: any[] = [];

  return (
    <DefaultLayout>
      <div className={`Sponsors2021Page`}>
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
                      {info.description}
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
