import AtomicLink from "../atoms/AtomicLink";

function Nav(props) {
    const { menuItems } = this.props;

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