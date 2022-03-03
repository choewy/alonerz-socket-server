import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Container from './common/Container';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [authorized, setAuthorized] = useState();

  useEffect(() => {
    const getAuthorized = async () => {
      setAuthorized({ user_id: "choewy" });
      // setAuthorized(false);
    };
    getAuthorized();
    return () => { };
  }, []);

  return (
    <div className='app'>
      <Header authorized={authorized} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/me' element={<div>프로필</div>} />
          <Route path='/login' element={<LoginPage authorized={authorized} />} />
          <Route path='/signup' element={<div>회원가입</div>} />
          <Route path='/write' element={<div>글작성</div>} />
          <Route path='/archive' element={<div>활동내역</div>} />
          <Route path='/:post_id/edit' element={<div>글수정</div>} />
          <Route path='/:post_id' element={<PostPage authorized={authorized} />} />
        </Routes>
      </Container>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
