import React from "react";
import logo from '../assets/img/favicon.png';

function Header(){
    return(
        <>
            <section class="navigation">
                <div class="nav-container">
                    <div class="brand">
                    <a href="#!">
                        <img src={logo} alt="" />
                    </a>
                    </div>
                    <nav>
                    <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                    <ul class="nav-list">
                        <li>
                        <a href="#!">Home</a>
                        </li>
                        <li>
                        <a href="#!">About</a>
                        </li>
                        {/* <li>
                        <a href="#!">Services</a>
                        <ul class="navbar-dropdown">
                            <li>
                            <a href="#!">Sass</a>
                            </li>
                            <li>
                            <a href="#!">Less</a>
                            </li>
                            <li>
                            <a href="#!">Stylus</a>
                            </li>
                        </ul>
                        </li> */}
                        <li>
                        <a href="#!">Health Tools</a>
                        </li>
                        <li>
                        <a href="#!">Health Preparations</a>
                        </li>
                        {/* <li>
                        <a href="#!">Category</a>
                        <ul class="navbar-dropdown">
                            <li>
                            <a href="#!">Sass</a>
                            </li>
                            <li>
                            <a href="#!">Less</a>
                            </li>
                            <li>
                            <a href="#!">Stylus</a>
                            </li>
                        </ul>
                        </li> */}
                        <li>
                        <a href="#!">Contact</a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Header