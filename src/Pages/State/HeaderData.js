import React from "react";
import { Link } from 'react-router-dom';
import '../../index.js';

export const navOptions = [
    //header nav
    {
        href: "/Home",
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
      <div className="nav">
        {navOptions.map((nav, i) => (
          <Link key={i} to={nav.href}>
            <p className="test">
              {nav.title}
            </p>
          </Link>
        ))}
      </div>
    );
  };


  export default Nav;