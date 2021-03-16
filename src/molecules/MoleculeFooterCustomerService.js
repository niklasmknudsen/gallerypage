import AtomicLink from "../atoms/AtomicLink";
import React from 'react';

function MoleculeFooterCustomerService(props) {
    return (
        <div>
            <h3>Customer Service</h3>
            <ul>
                {props.footerServiceLinks.map((item =>
                    <li>
                        <AtomicLink href={item.href} text={item.text} />
                    </li>
                ))}
            </ul>  
        </div>
    );
}

export default MoleculeFooterCustomerService;
