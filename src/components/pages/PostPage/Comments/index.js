import { useEffect, useState } from "react";
import { getComments } from "../../../../utils/axios";
import Cards from "./Cards";
import Header from "./Header";
import Writer from "./Writer";

const Comments = (props) => {
    const { authorized, post_id } = props;
    const [comments, setComments] = useState();

    useEffect(() => {
        getComments(post_id, setComments);
    }, [post_id]);

    if (!comments) return <></>;

    // 로그인 상태이면 댓글 등록할 수 있도록

    return (
        <div className="comments">
            <Header />
            <Writer authorized={authorized} />
            <Cards authorized={authorized}
                comments={comments} />
        </div>
    );
};

export default Comments;