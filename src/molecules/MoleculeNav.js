import AtomicLink from "../atoms/AtomicLink";
import React from 'react';

function MoleculeNav(props) {
    const menuItems = props.menuItems;
    return (
        <nav>
            <ul>
                {menuItems.map((item => 
                    <li>
                        <AtomicLink href={item.href} style={item.style} text={item.text} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MoleculeNav;