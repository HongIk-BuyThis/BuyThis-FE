const ReviewCard = ({ image, title, content }) => {
  return (
    <div className="w-[485px] h-[236px] p-[32px] flex gap-[32px] rounded-[15px] border border-[#177568] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <img
        src={image}
        alt={title}
        className="w-[154px] h-[188px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-start">
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
