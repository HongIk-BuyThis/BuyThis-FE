import FanHotspotCard from '../components/FanHotspotCard';
import WithMuuImg from '../assets/WithMuuHongdae.png';
import HaidilaoImg from '../assets/HaidilaoHotPot.png';

const CafeDetail = () => {
  return (
    <section className="flex flex-col px-[40px] py-[20px]">
      <h2 className="text-[20px] font-semibold mb-[20px]">
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
  );
};

export default CafeDetail;
