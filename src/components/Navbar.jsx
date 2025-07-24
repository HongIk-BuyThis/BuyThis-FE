import { useNavigate } from 'react-router-dom';
import Logo from '../assets/KPOP_CAFE_HUNTERS.svg';
import LanguageIcon from '../assets/LanguageFilter.svg';
import LoginIcon from '../assets/LogIn.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* 로고 */}
      <img
        src={Logo}
        alt="KPOP CAFE HUNTERS"
        className="h-6 cursor-pointer"
        onClick={() => navigate('/')}
      />

      {/* 오른쪽 버튼 영역 */}
      <div className="flex items-center gap-6">
        {/* 언어 필터 버튼 */}
        <button className="flex items-center gap-2 bg-main-bright px-3 py-1.5 rounded-full text-gray-900 text-sm font-medium">
          <img src={LanguageIcon} alt="언어 아이콘" className="w-4 h-4" />
          언어 필터링
        </button>

        {/* 로그인 */}
        <div
          onClick={() => navigate('/login')}
          className="flex items-center gap-1 text-gray-100 text-sm font-pretendard cursor-pointer hover:underline"
        >
          <img src={LoginIcon} alt="로그인 아이콘" className="w-4 h-4" />
          로그인
        </div>
      </div>
    </header>
  );
};

export default Navbar;
