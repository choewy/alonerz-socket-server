const Tags = (props) => {
    const { tags } = props;

    if (!tags) return <></>;

    return (
        <div className="article-tag-box">
            {tags.map((tag, index) =>
                <div key={index} className="tag">
                    {tag}
                </div>
            )}
        </div>
    );
};

export default Tags;