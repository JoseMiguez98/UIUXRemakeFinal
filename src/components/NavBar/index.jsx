import React from 'react';
import Logo from '../../assests/logo.png';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

const NavBar = () => (
    <nav>
        <ul className="nav-links-list">
            <li>
               <Link to="/">
                    <img src={Logo} id="site-logo" alt="Site logo"/>
               </Link>
            </li>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/news">
                    Noticias
                </Link>
            </li>
            <li>
                <Link to="/forum">
                    Foro
                </Link>
            </li>
            <li>
                <Link to="/faq">
                    FAQs
                </Link>
            </li>
        </ul>
        <SearchBar/>
    </nav>
);

export default NavBar;
