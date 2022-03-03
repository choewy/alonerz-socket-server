import { AiOutlineUser } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';

const styles = {
    firstDetail: {
        style: { margin: "0 10px 0 0" }
    },
    otherDetails: {
        style: { margin: "0 10px 0" }
    }
};

const Detail = (props) => {
    const { user_id, createdAt, view_count } = props;
    return (
        <div className="detail-box article-detail-box">
            <div className="detail-item" {...styles.firstDetail}>
                <BiTime />{createdAt}
            </div>
            <div className="detail-item" {...styles.otherDetails}>
                <FaRegEye />{view_count}
            </div>
            <div className="detail-item" {...styles.otherDetails}>
                <AiOutlineUser />{user_id}
            </div>
        </div>
    );
};

export default Detail;