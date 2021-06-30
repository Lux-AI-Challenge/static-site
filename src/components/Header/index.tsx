import {
  AppBar,
  // createStyles,
  // makeStyles,
  // Theme,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
} from '@material-ui/core';
import React from 'react';
import NavTab from './navtab';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import BurgerSVG from './burger.svg';
import './index.css';
import { useHistory } from 'react-router-dom';
// import LanguageContext from 'LanguageContext';
// import { Language } from 'languageconsts';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     langBtn: {
//       color: 'rgba(0,0,0,0.87)',
//     },
//   })
// );

const Header = () => {
  // const classes = useStyles();
  const smallSize = useMediaQuery('(max-width: 768px)');
  const { t } = useTranslation(['Header']);
  const history = useHistory();
  // const { setLanguage, language } = React.useContext(LanguageContext);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleLanguageTabClose = (lang: Language) => {
  //   return () => {
  //     setLanguage(lang);
  //     setAnchorEl(null);
  //   };
  // };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (to: string) => {
    return () => {
      setAnchorEl(null);
      history.push(to);
    };
  };
  return (
    <div className="Header">
      <AppBar position="static">
        {smallSize ? (
          <div className="mobile-menu-wrapper">
            <IconButton
              className="mobile-menu-btn"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <SvgIcon className="burger-menu-svg">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="25" height="4" fill="#F9EFE2" />
                  <rect y="9" width="25" height="4" fill="#F9EFE2" />
                  <rect y="18" width="25" height="4" fill="#F9EFE2" />
                </svg>
              </SvgIcon>
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => {
                setAnchorEl(null);
              }}
            >
              <MenuItem onClick={handleClose('/')}>{t('Home')}</MenuItem>
              {/* <MenuItem onClick={handleClose}>{t('Compete')}</MenuItem>
              <MenuItem onClick={handleClose}>{t('Leaderboard')}</MenuItem> */}
              <MenuItem onClick={handleClose('/sponsors')}>
                {t('Sponsors')}
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>{t('Forums')}</MenuItem> */}
            </Menu>
          </div>
        ) : (
          <Toolbar>
            <div className="spacer"></div>
            <div className="header-tabs">
              <NavTab to="/" text={t('Home')} />

              {/* <NavTab
              external
              to="/compete"
              text={t('Compete')}
            />*/}
              {/* <NavTab
                external
                to="https://kaggle.com/c/..."
                text={t('Leaderboard')}
              /> */}
              <NavTab to="/sponsors" text={t('Sponsors')} />
              {/* <NavTab
                external
                to="https://kaggle.com/c/..."
                text={t('Forums')}
              /> */}
              {/* <NavTab to="/#contact" text={t('Contact')} /> */}
              {/* <HashLink to="/contact">
              <Button>{t('Contact')}</Button>
            </HashLink>
            <HashLink to="#partners">
              <Button>{t('Partners')}</Button>
            </HashLink>
            <HashLink to="#sponsor">
              <Button>{t('Sponsors')}</Button>
            </HashLink> */}
              {/* <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {language.toUpperCase()}
            </Button> */}
              {/* <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleLanguageTabClose(Language.EN)}
                className={classes.langBtn}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={handleLanguageTabClose(Language.ZH)}
                className={classes.langBtn}
              >
                Chinese
              </MenuItem>
            </Menu> */}
            </div>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
