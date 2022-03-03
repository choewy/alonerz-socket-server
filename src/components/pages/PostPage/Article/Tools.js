import { useState } from 'react';
import { MdOutlineMode, MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Modal from '../../../common/Modal';

const Tools = (props) => {
    const { authorized, user_id, post_id } = props;

    const [open, setOpen] = useState(false);

    const articleDelete = () => {
        setOpen(true);
    };

    if (authorized.user_id === user_id) {
        return (<>
            <Modal open={open} setOpen={setOpen}>
                <div className="article-remove-modal">
                    <h1>삭제하시겠습니까?</h1>
                </div>
            </Modal>
            <div className="article-tools-box">
                <div className="article-tools-icon-box" >
                    <Link to={`/${post_id}/edit`}>
                        <MdOutlineMode />
                    </Link>
                </div>
                <div className="article-tools-icon-box">
                    <div onClick={articleDelete}>
                        <MdDeleteOutline />
                    </div>
                </div>
            </div>
        </>);
    };

    return <></>;
};

export default Tools;