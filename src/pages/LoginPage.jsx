import KpopCafeHunters from '../assets/KPOP_CAFE_HUNTERS.svg';
import googleLogo from '../assets/google.svg';
import EyeClosed from '../assets/EyeClosed.svg';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center overflow-hidden">
      {/* 배경 이미지 + 로그인 카드 묶음 */}
      <div className="flex flex-col items-center justify-center gap-[40px]">
        {/* 배경 SVG 이미지 */}
        <img
          src={KpopCafeHunters}
          alt="KPOP Cafe Hunters Background"
          className="w-auto h-auto"
        />

        {/* 로그인 카드 */}
        <div className="w-[389.43px] h-[608px] px-[56px] py-[80px] bg-main-bright rounded-[15px] flex flex-col justify-start items-start gap-[80px]">
          {/* 제목 + 입력 영역 */}
          <div className="w-full flex flex-col gap-[32px]">
            <div className="text-[48px] font-bold text-gray-90 font-pretendard">
              Login
            </div>

            <div className="flex flex-col gap-[16px]">
              {/* ID 입력 */}
              <input
                type="text"
                placeholder="id"
                className="w-[279.43px] px-[32px] py-[16px] bg-white rounded-[5px] outline outline-1 outline-main-dark text-[16px] text-gray-60 font-pretendard"
              />

              {/* PASSWORD 입력 */}
              <div className="w-[279.43px] px-[32px] py-[16px] bg-white rounded-[5px] outline outline-1 outline-main-dark flex items-center">
                <input
                  type="password"
                  placeholder="password"
                  className="bg-transparent outline-none text-[16px] text-gray-60 font-pretendard w-full"
                />
                {/* <img
                  src={EyeClosed}
                  alt="비밀번호 보기"
                  className="w-[20px] h-[20px] ml-auto cursor-pointer"
                /> */}
              </div>

              {/* 로그인 버튼 */}
              <button className="w-full px-[80px] py-[16px] bg-main-dark rounded-[5px] flex justify-center items-center gap-[10px]">
                <span className="text-white text-[20px] font-pretendard">Login</span>
              </button>
            </div>
          </div>

          {/* 구글 로그인 + 회원가입 */}
          <div className="w-full flex flex-col items-center gap-[16px]">
            {/* 구글 로그인 버튼 */}
            <button className="w-full px-[20px] py-[16px] bg-white rounded-[5px] outline outline-1 outline-gray-50 flex justify-center items-center gap-[10px]">
              <div className="flex items-center justify-center w-[24px] h-[20px] relative overflow-hidden">
                <img
                  src={googleLogo}
                  alt="구글 로그인 아이콘"
                  className="w-full h-full"
                />
              </div>
              <span className="w-[140px] h-[30px] text-gray-60 text-xl font-pretendard font-normal">
                Google Login
              </span>
            </button>

            {/* 회원가입 링크 */}
            <div className="text-center text-main-dark text-[16px] font-pretendard leading-[19px] cursor-pointer">
              Sign in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
