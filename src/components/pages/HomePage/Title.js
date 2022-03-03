import { Link } from "react-router-dom";

const Title = (props) => {
    const { post_id, title } = props;

    return (
        <h1 className="title-text">
            <Link to={`/${post_id}`} className="title-link">
                {title}
            </Link>
        </h1>
    );
};

export default Title;