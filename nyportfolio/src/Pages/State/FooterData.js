import React from "react";
import { Link, } from 'react-router-dom';
import '../../index.js';

export const navOptions2 = [
    {
        Title1: "Quick Links",
        Links: [
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
    },
]


const Nav2 = () => {
    return (
        <div className="nav">
        {navOptions2.Links.map((nav, i) => (
          <div>
            <h3>
                {nav.Title1}
            </h3>
              <Link key={i} to={nav.href}>
                <p className="text-title">
                    {nav.title}
                </p>
              </Link>
          </div>
        ))}
      </div>
    );
  };


  export default Nav2;