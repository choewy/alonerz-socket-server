
const Content = (props) => {
    const { content } = props;

    if (!content) return <></>;

    return (
        <div className="article-content-box">
            <article className="article-content">
                {content}
            </article>
        </div>
    );
};

export default Content;