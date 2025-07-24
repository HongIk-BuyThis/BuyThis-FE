import KpopCafeHunters from '../assets/KPOP_CAFE_HUNTERS.svg';
import LoginCard from '../components/LoginCard';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <img
          src={KpopCafeHunters}
          alt="KPOP Cafe Hunters Background"
          className="w-auto h-auto"
        />
        {/* 원래 사이즈 그대로 */}
        <LoginCard size="default" />
      </div>
    </div>
  );
};

export default LoginPage;
