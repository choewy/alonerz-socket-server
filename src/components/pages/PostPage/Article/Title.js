

const Header = (props) => {
    const { title } = props;
    return (
        <div className="article-title-box">
            <div className="article-title">
                <h1>{title}</h1>
            </div>
        </div>
    )
};

export default Header;