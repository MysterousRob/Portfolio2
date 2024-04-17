import React from "react";
import '../../assets/css/Header.css';
import Nav from "../../Pages/State/HeaderData";


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