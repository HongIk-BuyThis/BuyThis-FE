import React from 'react';

const FanHotspotCard = ({ image, title, distance, address, description }) => {
  return (
    <div className="flex w-[482px] p-[32px_40px] flex-col items-start gap-[10px] rounded-[15px] border border-[#177568] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <img src={image} alt={title} className="w-[64px] h-[64px]" />
      <h3 className="text-[24px] font-bold text-[#171717] font-pretendard">
        {title}
      </h3>
      <p className="text-[20px] font-pretendard text-[#177568]">
        📍 {distance}
      </p>
      <p className="text-[16px] text-[#777] leading-[19px] font-pretendard">
        {address}
      </p>
      <p className="text-[16px] text-[#777] leading-[19px] font-pretendard">
        {description}
      </p>
    </div>
  );
};

export default FanHotspotCard;
