const ReviewCard = ({ image, title, content }) => {
  return (
    // Figma Frame 9: width: 485px, height: 236px, padding: 32px, border-radius: 15px, border: 1px solid #177568, background: white, box-shadow
    <div className="w-[485px] h-[236px] p-[32px] flex gap-[32px] rounded-[15px] border border-[#177568] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="w-[154px] h-[188px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-start">
        {/* Figma에서 텍스트 스타일: Title - text-20px font-bold, Content - text-20px font-normal */}
        <h3 className="text-[20px] font-bold text-[#171717] mb-2 font-pretendard">
          {title}
        </h3>
        <p className="text-[20px] font-normal text-[#171717] font-pretendard leading-[24px] whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
