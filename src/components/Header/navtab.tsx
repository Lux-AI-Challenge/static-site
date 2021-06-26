import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './navtab.css';
type NavTabProps = {
  to: string;
  text: string;
  external?: boolean;
};
const NavTab = ({ to, text, external }: NavTabProps) => {
  if (external) {
    return (
      <a className="NavTab" href={to} target="_blank" rel="noreferrer">
        <Button>{text}</Button>
      </a>
    );
  }
  let active = false;
  if (window.location.pathname === to) {
    active = true;
  }
  console.log();
  return (
    <div className={`NavTab ${active ? 'active' : ''}`}>
      <Link to={to}>
        <Button>{text}</Button>
      </Link>
    </div>
  );
};

export default NavTab;
