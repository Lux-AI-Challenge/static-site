import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
} from '@material-ui/core';
import React from 'react';
import NavTab from './navtab';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './index.css';
import { useHistory } from 'react-router-dom';

const Header = ({ day }: { day?: boolean } = { day: false }) => {
  const smallSize = useMediaQuery('(max-width: 768px)');
  const { t } = useTranslation(['Header']);
  const history = useHistory();
  const navLinks = [
    {
      name: 'Learn',
      link: '/specs-s2',
      external: false,
    },
    {
      name: 'Compete',
      link: 'https://kaggle.com/c/lux-ai-season-2/',
      external: true,
    },
    {
      name: 'Sponsors',
      link: '/sponsors-s2',
    },
    {
      name: 'Forums',
      link: 'https://kaggle.com/c/lux-ai-season-2/discussion',
      external: true,
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (to: string, external: boolean = false) => {
    if (external) {
      return () => {
        setAnchorEl(null);
        window.location.href = to;
      };
    }
    return () => {
      setAnchorEl(null);
      history.push(to);
    };
  };
  return (
    <div className="Header">
      <AppBar position="static" className={`${day ? 'day' : 'night'}`}>
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
              id={`mobile-menu`}
              className={`${day ? 'day' : 'night'}`}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => {
                setAnchorEl(null);
              }}
            >
              <MenuItem onClick={handleClose('/')}>{t('Home')}</MenuItem>
              {navLinks.map((info) => {
                return (
                  <MenuItem
                    key={info.link}
                    onClick={handleClose(info.link, info.external)}
                  >
                    {t(info.name)}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        ) : (
          <Toolbar>
            <div className="spacer"></div>
            <div className="header-tabs">
              <NavTab to="/" text={t('Home')} />
              {navLinks.map((info) => {
                return (
                  <NavTab
                    key={info.link}
                    external={info.external}
                    to={info.link}
                    text={t(info.name)}
                  />
                );
              })}
            </div>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
