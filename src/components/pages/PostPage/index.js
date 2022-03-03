import { useParams } from "react-router-dom";
import Article from "./Article";
import Comments from "./Comments";
import './style.css';

const PostPage = (props) => {
    const { authorized } = props;
    const { post_id } = useParams();
    return (<>
        <Article authorized={authorized} post_id={post_id} />
        <Comments authorized={authorized} post_id={post_id} />
    </>);
};

export default PostPage;
