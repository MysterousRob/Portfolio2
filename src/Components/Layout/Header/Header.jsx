import React from "react";
import './Header.css';
import Nav from "../../Nav/Nav";


function Header(){
    return(
        <>
            <header className="giving-head">
                <div className="header-content">
                    <h1 className="name">Robert Gasior</h1>
                    <div className="navigation">
                        <Nav />
                    </div>
                </div>
                </header>
        </>
    )
}

export default Header;