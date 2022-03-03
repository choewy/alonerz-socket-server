import { useState } from "react"
import { Link } from "react-router-dom";

const MAX_LENGTH = 1000;

const Writer = (props) => {
    const { authorized } = props;
    const [comment, setComment] = useState('');

    const commentChanged = (e) => {
        const { target: { value } } = e;
        setComment(value);
    };

    const commentCommit = (e) => {
        alert("구현이 필요합니다!");
    };

    return (
        <div className="comment-write-box">
            <textarea className="comment-write-area"
                rows={3}
                maxLength={MAX_LENGTH}
                value={comment}
                placeholder="댓글로 자신의 의견을 남겨보세요."
                onChange={commentChanged}
                disabled={!authorized} />
            <div className={"comment-write-tool-box"}>
                {authorized
                    ? <>
                        <div className="comment-length">
                            <span>({comment.length}/{MAX_LENGTH})</span>
                        </div>
                        <button className="comment-write-button"
                            disabled={comment === '' && true}
                            onClick={commentCommit}>
                            완료
                        </button>
                    </>
                    : <>
                        <div />
                        <Link to='/login' className="comment-write-button">
                            {/* <button className="comment-write-button"></button> */}
                            로그인
                        </Link>
                    </>}
            </div>
        </div>
    );
};

export default Writer;