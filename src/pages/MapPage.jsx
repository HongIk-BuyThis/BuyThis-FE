import Navbar from '../components/Navbar';
import markerImg from '../assets/Ellipse 6.png'; // 마커로 쓸 이미지
import backgroundImg from '../assets/map.png'; // 배경용 지도 이미지 (스크린샷)

const markers = [
  { id: 1, top: '210px', left: '480px' },
  { id: 2, top: '300px', left: '550px' },
  { id: 3, top: '380px', left: '600px' },
  { id: 4, top: '450px', left: '490px' },
  { id: 5, top: '510px', left: '560px' },
]; // 마커 위치는 원하는 대로 조정 가능

const MapPage = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <div className="relative w-full flex flex-col items-center px-[40px] py-[24px] gap-[24px]">
        {/* 검색창 */}
        <input
          type="text"
          placeholder="검색"
          className="w-[1142px] h-[56px] px-[24px] py-[16px] text-[20px] border border-gray-300 rounded-[8px] placeholder:text-gray-400"
        />

        {/* 지도 배경 + 마커 */}
        <div className="relative w-[1142px] h-[700px] rounded-lg overflow-hidden shadow">
          <img
            src={backgroundImg}
            alt="지도 배경"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {markers.map((marker) => (
            <img
              key={marker.id}
              src={markerImg}
              alt="마커"
              className="absolute w-[40px] h-[40px]"
              style={{ top: marker.top, left: marker.left }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
