import ReviewCard from './ReviewCard';
import sampleImg from '../assets/sample_review1.png'; // 예시 이미지

const ReviewSlider = () => {
  const reviews = [
    {
      image: sampleImg,
      title: 'Riku Birthday',
      content:
        'Very Good Very Good\nVery Good Very Good\nVery Good Very Good\nVery Good Very Good\nVery Good Very Good',
    },
  ];

  return (
    // ReviewSlider 내부의 요소 (제목과 카드 슬라이더) 간의 간격 조정.
    // Figma Frame 99가 ReviewSlider 전체를 감싸고 그 gap이 80px로 되어 있지만,
    // 이는 CafeDetail에서 ReviewSlider와 다른 섹션 간의 간격일 가능성이 높습니다.
    // ReviewSlider 내부의 제목과 슬라이더 자체의 간격은 Figma에서 명확히 보이지 않으므로
    // 기존의 gap-2 (8px)를 유지하거나, 필요에 따라 조정합니다.
    <section className="flex flex-col gap-2 w-full">
      {' '}
      {/* w-full 추가하여 부모 div 너비에 맞춤 */}
      <div className="flex items-center gap-1">
        <h2 className="text-[24px] font-bold text-[#171717] font-pretendard">
          Cafe Review
        </h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="ml-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" />
        </svg>
      </div>
      <div className="w-full overflow-x-auto py-2">
        {' '}
        {/* py-2 유지 */}
        {/* ReviewCard들 사이의 간격은 Figma ReviewCard (Frame 9)에서 확인된 32px을 따릅니다. */}
        <div className="flex gap-[32px]">
          {reviews.map((r, i) => (
            <ReviewCard
              key={i}
              image={r.image}
              title={r.title}
              content={r.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
