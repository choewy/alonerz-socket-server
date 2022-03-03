import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../asset/routes";
import NavItem from "./NavItem";

const Navbar = (props) => {
    const { authorized } = props;
    const location = useLocation();
    const [linksProps, setLinksProps] = useState();

    useEffect(() => {
        const { pathname } = location;
        const links = routes.map(linkProp => {
            const { href } = linkProp;
            if (href === pathname) {
                linkProp.className += " current";
            } else {
                linkProp.className = "navlink"
            }
            return linkProp;
        });
        setLinksProps(links)
    }, [location]);

    if (!linksProps) return (<ul className="navbar"></ul>);

    return (
        <ul className="navbar">
            {linksProps.map((linkProps, index) => {
                const { href, className, label } = linkProps;
                if (Object.keys(linkProps).includes('public')) {
                    return <NavItem key={index}
                        href={href}
                        className={className}
                        label={label} />
                }
                return typeof linkProps.auth === typeof authorized
                    && <NavItem key={index}
                        href={href}
                        className={className}
                        label={label} />
            })}
        </ul>
    );
};

export default Navbar;