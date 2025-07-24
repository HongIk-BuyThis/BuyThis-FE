import { useNavigate } from 'react-router-dom';
import Logo from '../assets/KPOP_CAFE_HUNTERS.svg';
import LanguageIcon from '../assets/LanguageFilter.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* 로고 */}
      <img
        src={Logo}
        alt="KPOP CAFE HUNTERS"
        className="h-10 cursor-pointer" // ← h-6 → h-10
        onClick={() => navigate('/')}
      />

      {/* 오른쪽 버튼 영역 */}
      <div className="flex items-center gap-6">
        {/* 언어 필터 버튼 */}
        <button className="flex items-center gap-2 px-6 py-2 rounded-[10px] bg-[#DFF8F5] text-black text-sm font-normal">
          <img src={LanguageIcon} alt="언어 아이콘" className="w-5 h-5" />
          언어 필터링
        </button>

        {/* 로그인 */}
        <div
          onClick={() => navigate('/login')}
          className="flex items-center gap-1 text-[#000] text-sm font-normal cursor-pointer"
        >
          로그인
        </div>
      </div>
    </header>
  );
};

export default Navbar;
