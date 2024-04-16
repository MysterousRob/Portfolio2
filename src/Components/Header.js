import React from "react";
import '../assets/css/Header.css';
import Nav from "../Pages/State/HeaderData";

function Header(){
    return(
        <>
            <header className="giving-head">
                <div className="right-header">
                    <h1>
                        Robert Gasior
                    </h1>
                </div> 
                <div className="left-header">
                    <Nav />
                </div>
            </header>
        </>
    )
}

export default Header;