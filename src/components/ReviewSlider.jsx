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
    {
      image: sampleImg,
      title: 'Taesan Café',
      content: 'Cozy Place\nGreat Drinks\nPerfect for photos\nLovely staff!',
    },
  ];

  return (
    <section className="flex flex-col gap-2 mt-4">
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

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4">
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
