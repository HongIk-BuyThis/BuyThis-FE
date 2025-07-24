import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import CelebrityPage from './pages/CelebrityPage';
import CafePage from './pages/CafePage';
import TourTips from './pages/TourTips';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
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
