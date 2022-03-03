import { useState } from 'react';
import { MdOutlineMode, MdDeleteOutline } from 'react-icons/md';
import Modal from '../../../common/Modal';

const Tools = (props) => {
    const { authorized, user_id, comment_id } = props;

    const [open, setOpen] = useState(false);

    const commentEditMode = () => {
        console.log(comment_id);
        alert("구현 필요")
    };

    const commentDelete = () => {
        setOpen(true);
    };

    if (authorized.user_id === user_id) {
        return (<>
            <Modal open={open} setOpen={setOpen}>
                <div className="article-remove-modal">
                    <h1>삭제하시겠습니까?</h1>
                </div>
            </Modal>
            <div className="comment-tools-box">
                <div className="comment-tools-icon-box" >
                    <div onClick={commentEditMode}>
                        <MdOutlineMode />
                    </div>
                </div>
                <div className="comment-tools-icon-box">
                    <div onClick={commentDelete}>
                        <MdDeleteOutline />
                    </div>
                </div>
            </div>
        </>);
    };

    return <></>;
};

export default Tools;