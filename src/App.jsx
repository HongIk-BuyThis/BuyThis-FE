import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import CelebrityPage from './pages/CelebrityPage';
import CafePage from './pages/CafePage';
import TourTips from './pages/TourTips';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();

  // 로그인 페이지에서는 Navbar 숨기기
  const hideNavbarPaths = ['/login'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/celebrity" element={<CelebrityPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/tips" element={<TourTips />} />
        {/* 없는 주소 접속 시 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
