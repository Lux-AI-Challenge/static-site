import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './index.css';
import LanguageContext from 'LanguageContext';
import { Language } from 'languageconsts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    langBtn: {
      color: 'rgba(0,0,0,0.87)',
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation(['Header']);
  const { setLanguage, language } = React.useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageTabClose = (lang: Language) => {
    return () => {
      setLanguage(lang);
      setAnchorEl(null);
    };
  };
  return (
    <div className="Header">
      <AppBar position="static">
        <Toolbar>
          <div className="spacer"></div>
          <div className="header-tabs">
            <Link to="#about">
              <Button>{t('About Us')}</Button>
            </Link>
            <Link to="#contact">
              <Button>Contact</Button>
            </Link>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {language}
            </Button>
            <Menu
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
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
