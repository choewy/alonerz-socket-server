import { useEffect, useState } from "react";
import { getPost } from "../../../../utils/axios";
import Title from "./Title";
import Detail from "./Detail";
import Content from "./Content";
import Tags from "./Tags";
import Tools from "./Tools";

const Article = (props) => {
    const { authorized, post_id } = props;

    const [post, setPost] = useState();

    useEffect(() => {
        getPost(post_id, setPost);
    }, [post_id]);

    if (!post) return <></>;

    const { title, user_id, createdAt, view_count, content, tags } = post;

    return (
        <div className="article">
            <Tools authorized={authorized}
                user_id={user_id}
                post_id={post_id} />
            <Title title={title} />
            <Detail user_id={user_id}
                createdAt={createdAt}
                view_count={view_count} />
            <Content content={content} />
            <Tags tags={tags} />
        </div>
    );
};

export default Article;