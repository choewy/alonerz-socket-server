const Tags = (props) => {
    const { tags } = props;
    return (
        <div className="tags">
            {tags.map((tag, index) => {
                return (
                    <div key={index} className="tag">
                        {tag}
                    </div>
                );
            })}
        </div>
    );
};

export default Tags;