import { Navigate } from "react-router-dom";

const LoginPage = (props) => {
    const { authorized } = props;

    if (authorized) return <Navigate to="/" />
    return <div>
        로그인
    </div>
};

export default LoginPage;