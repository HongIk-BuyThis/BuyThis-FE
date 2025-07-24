import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 공통 컴포넌트
import Navbar from "./components/Navbar";

// 페이지 컴포넌트
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import CelebrityPage from "./pages/CelebrityPage";
import CafePage from "./pages/CafePage";
import TourTips from "./pages/TourTips";
import NotFound from "./pages/NotFound"; // 404 페이지

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
