import React from 'react'
import { navOptions } from '../../Pages/State/HeaderData';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="header-nav">
        {navOptions.map((nav, i) => (
          <Link key={i} to={nav.href}>
            <p className="text-title">
              {nav.title}
            </p>
          </Link>
        ))}
      </div>
    );
  };

export default Nav