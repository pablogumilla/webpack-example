import React from 'react';
import WebpackLogo from "../img/webpack-logo.svg";

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <WebpackLogo className="logo" width={50} height={50} />
                </a>
            </div>
        </nav>
    </header>
)

export default Header;
