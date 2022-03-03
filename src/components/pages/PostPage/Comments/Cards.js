import Card from "./Card";

const Cards = (props) => {
    const { authorized, comments } = props;

    return (
        <div className="comments-card">
            {comments.map((comment, index) =>
                <Card key={index}
                    authorized={authorized}
                    comment={comment} />
            )}
        </div>
    )
}

export default Cards;