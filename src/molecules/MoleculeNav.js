import AtomicLink from "../atoms/AtomicLink";

function MoleculeNav(props) {
    return (
        <nav>
            <ul>
                {props.menuItems.map((item => 
                    <li className={item.style}>
                        <AtomicLink href={item.href} text={item.text} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MoleculeNav;