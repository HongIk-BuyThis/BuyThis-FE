import { useNavigate } from 'react-router-dom';
import Logo from '../assets/KPOP_CAFE_HUNTERS.svg';
import LanguageIcon from '../assets/LanguageFilter.svg';
import LanguageSelector from '../components/LanguageSelector';
// 로그인 여부 임시 상태 (나중에 Zustand, Context 등으로 교체 가능)
const isLoggedIn = true; // 실제 상태 연동 필요

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center px-[40px] py-[16px] bg-white border-b border-[#C8C8C8]">
      {/* 로고 */}
      <img
        src={Logo}
        alt="KPOP CAFE HUNTERS"
        className="h-10 cursor-pointer"
        onClick={() => navigate('/')}
      />

      {/* 오른쪽 버튼 영역 */}
      <div className="flex items-center gap-6">
        {/* LanguageSelector 컴포넌트 삽입 */}
        <LanguageSelector />

        {/* 로그인 또는 마이페이지 */}
        {isLoggedIn ? (
          <div
            onClick={() => navigate('/login')}
            className="text-[#000] text-sm font-normal cursor-pointer"
          >
            Login
          </div>
        ) : (
          <div
            onClick={() => navigate('/mypage')}
            className="text-[#000] text-sm font-normal cursor-pointer"
          >
            My Page
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
