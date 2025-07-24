import posterImage from '../assets/TAESAN.png';
import ReviewSlider from '../components/ReviewSlider';
import FanHotspotCard from '../components/FanHotspotCard';
import WithMuuImg from '../assets/WithMuuHongdae.png';
import HaidilaoImg from '../assets/HaidilaoHotPot.png';

const CafeDetail = () => {
  return (
    // Figma Desktop - 10: flex flex-col, items-center, gap: 80px, px-[40px] py-[85px]
    // py-[24px] -> py-[85px]으로 수정. gap-[40px] -> gap-[80px]으로 수정. items-center 추가.
    <div className="flex flex-col items-center px-[40px] py-[85px] gap-[80px] bg-white">
      {/* === 상단: 포스터 + 텍스트 정보 (Figma Frame 53) === */}
      {/* display: flex, gap: 32px, width: 996px, height: 684px, align-items: flex-start */}
      {/* 기존 w-[996px] h-[684px] 클래스는 없었지만, Figma Frame 53 속성 반영 */}
      <div className="flex gap-[32px] w-[996px] h-[684px] items-start">
        <img
          src={posterImage}
          alt="TAESAN Birthday Poster"
          className="w-[486px] h-[684px] object-cover rounded-xl"
        />

        {/* Figma Frame 48: flex, flex-col, items-start, gap: 13px; */}
        {/* w-full은 부모 flex-item 내에서 남은 공간을 차지하도록 유지 */}
        <div className="flex flex-col items-start gap-[13px] w-full">
          <div className="flex justify-between items-start w-full">
            <h1 className="text-[48px] font-bold text-[#171717] font-pretendard">
              TAESAN
            </h1>
            {/* 별 아이콘의 프레임 속성은 Figma에서 30x30으로 유지 */}
            <img
              src="/src/assets/star.svg"
              alt="Star Icon"
              className="w-[30px] h-[30px]"
            />
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
          <div className="flex flex-col items-center w-[1028px] gap-[80px]">
            <ReviewSlider />
          </div>
        </div>
      </div>

      {/* === Fan Hotspot Section === */}
      {/* Fan Hotspot 섹션은 Frame 99와 동일한 너비 (Desktop - 10의 자식으로 1028px)를 가지는 것으로 추정. */}
      {/* H2 아래 mb-[20px]는 유지. flex-wrap gap-[20px] 유지. */}
      <section className="flex flex-col w-[1028px]">
        {' '}
        {/* Fan Hotspot Section의 너비도 1028px로 맞춤 */}
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
