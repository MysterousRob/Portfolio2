import React from "react";
import { Link } from 'react-router-dom';
import '../../index.js';

export const navOptions = [
    //header nav
    {
        href: "/",
        title: "Home",
    },
    {
        href: "/Prev",
        title: "Prev Projects",
    },
    {
        href: "/Contact",
        title: "Contact",
    },
    {
        href: "/Templates",
        title: "Coding Templates",
    },
    {
        href: "/About",
        title: "About Me",
    },
]


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


  export default Nav;