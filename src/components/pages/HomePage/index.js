import { useEffect, useState } from "react";
import Title from "./Title";
import Tags from "./Tags";
import Detail from "./Detail";
import { getPosts } from "../../../utils/axios";


const HomePage = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        getPosts(setPosts)
    }, []);

    if (!posts) {
        return (
            <div>불러오는 중...</div>
        );
    };

    return (
        <div className="cards">
            {posts.map((post, index) => {
                const { post_id, title, tags, user_id, createdAt, view_count } = post;
                return (
                    <div key={index} className="card">
                        <Title post_id={post_id} title={title} />
                        <Tags tags={tags} />
                        <Detail user_id={user_id}
                            createdAt={createdAt}
                            view_count={view_count} />
                    </div>
                );
            })}
        </div>
    );
};

export default HomePage;