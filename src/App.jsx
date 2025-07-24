import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage.jsx';
import './index.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
