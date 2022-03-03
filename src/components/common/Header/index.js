import Navbar from './Navbar';

const Header = (props) => {
    const { authorized } = props;
    return (
        <div className="header">
            <Navbar authorized={authorized} />
        </div>
    )
}

export default Header;