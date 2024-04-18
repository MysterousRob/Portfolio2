import React from "react";
import './Header.css';
import Nav from "../../Nav/Nav";


function Header(){
    return(
        <>
            <header className="giving-head">
                <div className="header-content">
                    <h1>Robert Gasior</h1>
                    <Nav />
                </div>
                </header>
        </>
    )
}

export default Header;