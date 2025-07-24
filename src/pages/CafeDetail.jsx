import posterImage from '../assets/TAESAN.png';
import { ReactComponent as StarIcon } from '../assets/star.svg';
import ReviewSlider from '../components/ReviewSlider';
import FanHotspotCard from '../components/FanHotspotCard';
import WithMuuImg from '../assets/WithMuuHongdae.png';
import HaidilaoImg from '../assets/HaidilaoHotPot.png';

const CafeDetail = () => {
  return (
    <div className="flex flex-col px-[40px] py-[24px] gap-[40px]">
      {/* === 상단: 포스터 + 텍스트 정보 === */}
      <div className="flex gap-[32px]">
        <img
          src={posterImage}
          alt="TAESAN Birthday Poster"
          className="w-[486px] h-[684px] object-cover rounded-xl"
        />

        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-start">
            <h1 className="text-[48px] font-bold text-[#171717] font-pretendard">
              TAESAN
            </h1>
            <StarIcon className="w-[30px] h-[30px]" />
          </div>

          <p className="text-[20px] text-[#777] font-pretendard">
            8.10, 2025 (Sun)~ 8.11, 2025 (Mon)
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[24px] font-bold text-[#177568] font-pretendard">
              Cafe 07
            </span>
            <span className="text-[24px] font-normal text-[#777] font-pretendard">
              12:00~20:00
            </span>
          </div>

          <p className="text-[16px] text-[#777] font-pretendard">
            40 Sinchon-ro 2an-gil, Mapo-gu, Seoul
          </p>
        </div>
      </div>

      {/* === 리뷰 슬라이더 === */}
      <ReviewSlider />

      {/* === Fan Hotspot Section === */}
      <section className="flex flex-col">
        <h2 className="text-[20px] font-semibold mb-[20px] font-pretendard">
          Fan Hotspots Nearby
        </h2>
        <div className="flex flex-wrap gap-[20px]">
          <FanHotspotCard
            image={HaidilaoImg}
            title="Haidilao Hot Pot"
            distance="5 minutes from this spot"
            address="Seoul, Mapo-gu, Yanghwa-ro, 176 Y’Z Park 5F"
            description="This spot serves delicious Chinese hot pot and is super popular among K-pop fans!"
          />
          <FanHotspotCard
            image={WithMuuImg}
            title="WithMuu Hongdae"
            distance="5 minutes from this spot"
            address="Seoul, Mapo-gu, Yanghwa-ro, 188 AK PLAZA 2F"
            description="You can find all kinds of K-pop merchandise and albums here."
          />
        </div>
      </section>
    </div>
  );
};

export default CafeDetail;
