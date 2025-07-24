import googleLogo from '../assets/google.svg';
import EyeClosed from '../assets/EyeClosed.svg';

const LoginCard = ({ size = 'default' }) => {
  const isSmall = size === 'small';

  return (
    <div
      className={`${
        isSmall
          ? 'w-[310px] h-[462px] px-[40px] py-[48px] gap-[48px]'
          : 'w-[389.43px] h-[608px] px-[56px] py-[80px] gap-[80px]'
      } bg-main-bright rounded-[15px] flex flex-col justify-start items-start`}
    >
      {/* 제목 + 입력 영역 */}
      <div className="w-full flex flex-col gap-[32px]">
        <div
          className={`font-bold text-gray-90 font-pretendard ${
            isSmall ? 'text-[32px]' : 'text-[48px]'
          }`}
        >
          Login
        </div>

        <div className="flex flex-col gap-[16px]">
          {/* ID 입력 */}
          <input
            type="text"
            placeholder="id"
            className={`w-full bg-white rounded-[5px] outline outline-1 outline-main-dark text-gray-60 font-pretendard ${
              isSmall
                ? 'px-[24px] py-[12px] text-[14px]'
                : 'px-[32px] py-[16px] text-[16px]'
            }`}
          />

          {/* PASSWORD 입력 */}
          <div
            className={`w-full bg-white rounded-[5px] outline outline-1 outline-main-dark flex items-center ${
              isSmall ? 'px-[24px] py-[12px]' : 'px-[32px] py-[16px]'
            }`}
          >
            <input
              type="password"
              placeholder="password"
              className={`bg-transparent outline-none w-full text-gray-60 font-pretendard ${
                isSmall ? 'text-[14px]' : 'text-[16px]'
              }`}
            />
            <img
              src={EyeClosed}
              alt="비밀번호 보기"
              className="w-[20px] h-[20px] ml-auto cursor-pointer"
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            className={`w-full bg-main-dark rounded-[5px] flex justify-center items-center gap-[10px] ${
              isSmall ? 'px-[60px] py-[12px]' : 'px-[80px] py-[16px]'
            }`}
          >
            <span
              className={`text-white font-pretendard ${
                isSmall ? 'text-[16px]' : 'text-[20px]'
              }`}
            >
              Login
            </span>
          </button>
        </div>
      </div>

      {/* 구글 로그인 + 회원가입 */}
      <div className="w-full flex flex-col items-center gap-[16px] mt-auto">
        {/* 구글 로그인 버튼 */}
        <button
          className={`w-full bg-white rounded-[5px] outline outline-1 outline-gray-50 flex justify-center items-center gap-[10px] ${
            isSmall ? 'px-[20px] py-[12px]' : 'px-[20px] py-[16px]'
          }`}
        >
          <div className="flex items-center justify-center w-[24px] h-[20px]">
            <img
              src={googleLogo}
              alt="구글 로그인 아이콘"
              className={isSmall ? 'h-[14px]' : 'h-[16px]'}
            />
          </div>
          <span
            className={`text-gray-60 font-pretendard font-normal leading-none ${
              isSmall ? 'text-[14px]' : 'text-xl'
            }`}
          >
            Google Login
          </span>
        </button>

        {/* 회원가입 링크 */}
        <div
          className={`text-center text-main-dark font-pretendard cursor-pointer ${
            isSmall ? 'text-[14px] leading-[18px]' : 'text-[16px] leading-[19px]'
          }`}
        >
          Sign in
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
