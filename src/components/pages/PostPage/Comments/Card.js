import { AiOutlineUser } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import Tools from './Tools';

const styles = {
    firstDetail: {
        style: { margin: "0 10px 0 0" }
    },
    otherDetails: {
        style: { margin: "0 10px 0" }
    }
};

const Card = (props) => {
    const { authorized, comment } = props;

    return (
        <div className="comment-card">
            <div className="comment-detail-box">
                <div>
                    <div className="detail-item" {...styles.firstDetail}>
                        <AiOutlineUser />
                        <span style={{ fontWeight: '800' }}>{comment.user_name}</span>
                        <span>({comment.user_id})</span>
                    </div>
                    <div className="detail-item" {...styles.otherDetails}>
                        <BiTime />{comment.createdAt}
                    </div>
                </div>
                <Tools authorized={authorized}
                    user_id={comment.user_id}
                    comment_id={comment.comment_id} />
            </div>
            <div className="comment-comment-box">
                <article className="comment-comment">
                    {comment.comment}
                </article>
            </div>
        </div>
    );
};

export default Card;