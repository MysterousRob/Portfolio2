import React from 'react'
import { Link } from 'react-router-dom'
import { footerNavData } from './FooterData'

const FooterNav = () => {
  return (
    <div className="footer-nav">
        {/* You were going straight into footerNavData.links, which is one too deep to access title */}

        {footerNavData.map((nav, index) => (
        <div key={index}>
            <h3>
                {nav.title}
            </h3>
            {nav.links.map((link, i) => (
                <Link key={i} to={link.href}>
                    <p className="">
                        {link.title}
                    </p>
                </Link>
            ))}
        </div>
        ))}
    </div>
  )
}

export default FooterNav