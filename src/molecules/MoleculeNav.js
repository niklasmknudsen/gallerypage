import AtomicLink from "../atoms/AtomicLink";
import AtomicLogo from "../atoms/AtomicLogo";
import '../assets/styles/molecules/nav.scss';
import React from 'react';

function MoleculeNav(props) {
    return (
        <div>
            <nav>
                <AtomicLogo />
                <ul className="nav-links">
                    {props.menuItems.map((item => 
                        <li className={item.style}>
                            <AtomicLink href={item.href} text={item.text} />
                        </li>
                    ))}
                </ul>
                <BurgerMenu />
            </nav> 
        </div>
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
            <div class="lineOne"></div>
            <div class="lineTwo"></div>
            <div class="lineThree"></div>
        </div>
    );
}


export default MoleculeNav;