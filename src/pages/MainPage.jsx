import { useNavigate } from 'react-router-dom'; // 라우터 훅 import
import LoginCard from '../components/LoginCard';

import mainPageFrame from '../assets/MainPageFrame.png';
import MapIcon from '../assets/map.svg';
import PartyPopIcon from '../assets/party-popper.svg';
import HeartIcon from '../assets/circle-heart.svg';

const MainPage = () => {
  const navigate = useNavigate(); // 페이지 이동 함수

  return (
    <div className="w-full min-h-screen bg-white px-[40px] py-[40px] box-border font-pretendard">
      {/* 고정된 전체 너비 wrapper (상단/중간/하단 통일) */}
      <div className="w-[1013px] mx-auto flex flex-col gap-[48px]">
        {/* 상단 섹션 */}
        <div className="flex justify-start items-start gap-[32px]">
          {/* 왼쪽 로그인 카드 */}
          <LoginCard size="small" />

          {/* 오른쪽 소개 박스 */}
          <div className="w-[668px] h-[462px] bg-neutral-200 relative overflow-hidden shadow rounded-[15px]">
            <img src={mainPageFrame} />
          </div>
        </div>

        {/* 중간 버튼 3개 */}
        <div className="flex gap-[40px] justify-start items-start">
          {/* 버튼 1 - Birthday Map */}
          <button
            onClick={() => navigate('/map')} // 클릭 시 이동
            className="w-80 px-12 py-4 bg-white rounded-2xl outline outline-2 outline-main-dark flex justify-between items-center"
          >
            <div className="w-10 h-10 flex justify-center items-center">
              <img src={MapIcon} alt="map" className="w-[28px] h-[28px]" />
            </div>
            <div className="text-main-dark text-[20px] font-normal">
              Birthday Map
            </div>
          </button>

          {/* 버튼 2 */}
          <div className="w-80 px-12 py-4 bg-white rounded-2xl outline outline-2 outline-main-dark flex justify-between items-center">
            <div className="w-10 h-10 flex justify-center items-center">
              <img
                src={PartyPopIcon}
                alt="star"
                className="w-[28px] h-[28px]"
              />
            </div>
            <div className="text-main-dark text-[20px] font-normal">
              Star days
            </div>
          </div>

          {/* 버튼 3 */}
          <div className="w-80 px-12 py-4 bg-white rounded-2xl outline outline-2 outline-main-dark flex justify-between items-center">
            <div className="w-10 h-10 flex justify-center items-center">
              <img src={HeartIcon} alt="cafe" className="w-[28px] h-[28px]" />
            </div>
            <div className="text-main-dark text-[20px] font-normal">
              Cafe Info
            </div>
          </div>
        </div>

        {/* 하단 예비 박스 */}
        <div className="w-full h-[176px] bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default MainPage;
