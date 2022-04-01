import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import '../styles/header.css';

export const DARK_GRAY = '#2A2B2E';

export const DARK_PINK = '#FF7C7C';

export const LIGHT_PINK = '#FFB6B9';

export const BLUE = '#8DEAFF';

export const YELLOW = '#FFE084';

export const LIGHT_GRAY = '#D9D9D9';

export const ALMOST_WHITE = '#F5F5F5';

// eslint-disable-next-line react/prop-types
const HeaderLink = ({ title, color, edge, selected }) => {
  const padding = edge ? '0rem' : '0.5rem';
  const link = title === 'tafadzwapasi.com' ? '' : title;

  return (
    <div className='header-link'>
      <Link
        to={`/${link}`}
        style={{ textDecoration: 'none' }}
        className={selected && 'header-no-link'}
      >
        <h3 style={{ color, paddingRight: padding }}>{title}</h3>
        {title !== 'tafadzwapasi.com' && (
          <div className={selected ? 'header-dot-active' : 'header-dot'}>
            <h3 style={{ color }}>•</h3>
          </div>
        )}
      </Link>
    </div>
  );
};

const Header = () => {
  const page = useParams().page || 'home';

  const useStyles = makeStyles((theme) => ({
    headerContent: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        right: 0,
        paddingRight: '5rem',
      },
    },
    headerContainer: {
      [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    },
  }));

  const classes = useStyles();
  const { headerContent, headerContainer } = classes;

  return (
    <div className={`header-container ${headerContainer}`}>
      <Hidden xsDown>
        <div className='header-logo'>
          <HeaderLink
            title='tafadzwapasi.com'
            color={ALMOST_WHITE}
            selected={page === 'home'}
          />
        </div>
      </Hidden>
      <div className={`header-content ${headerContent}`}>
        <HeaderLink
          title='about'
          color={DARK_PINK}
          selected={page === 'about'}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='work'
          color={BLUE}
          selected={page === 'work'}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='contact'
          color={YELLOW}
          selected={page === 'contact'}
        />
      </div>
    </div>
  );
};

export default Header;