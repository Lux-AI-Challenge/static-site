import DefaultLayout from '../layouts/default';
import './index.css';
import {
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
const SponsorPage = () => {
  // const { t } = useTranslation(['SponsorsPage']);
  // const classes = useStyles();

  return (
    <DefaultLayout>
      <div className={`SponsorsPage`}>
        <Typography variant="h1">Welcome</Typography>
      </div>
    </DefaultLayout>
  );
};
export default SponsorPage;
