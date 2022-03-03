import { Link } from "react-router-dom"

const NavItem = (props) => {
    const { href, className, label } = props;

    return (
        <Link to={href} className={className}>
            <li>{label}</li>
        </Link>
    );
};

export default NavItem;