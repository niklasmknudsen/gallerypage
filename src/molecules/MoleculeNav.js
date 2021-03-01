import AtomicLink from "../atoms/AtomicLink";
import AtomicLogo from "../atoms/AtomicLogo";
import '../assets/styles/molecules/nav.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// importing components

import PageHome from '../page/PageHome';
import PageContact from '../page/PageContact';

function MoleculeNav(props) {
    return (
        <nav>
            <AtomicLogo />
            <ul className="nav-links">
                    {props.menuItems.map((item =>
                        <li className={item.style}>
                            <Link to={item.href}>{item.text}</Link>
                        </li>
                    ))}
            </ul>
            <BurgerMenu />
        </nav>
    );
}

function BurgerMenu(props) {

    React.useEffect(() => {

        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', (event) => {
            /* Toggle Nav */
            nav.classList.toggle('nav-active');

            /* Animate Links in mobile Nav */
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                }
                else {
                    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 9 + 0.5}s`;
                }
            });
            /* Burger animation */
            burger.classList.toggle('toggle');
        });

    })

    return (
        <div className="burger">
            <div className="lineOne"></div>
            <div className="lineTwo"></div>
            <div className="lineThree"></div>
        </div>
    );
}


export default MoleculeNav;