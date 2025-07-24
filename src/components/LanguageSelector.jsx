import { useState } from 'react';
import LanguageIcon from '../assets/LanguageFilter.svg';

const languages = ['한국어', 'English', '日本語', '中文'];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 상단 버튼 */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-6 py-2 rounded-[10px] bg-[#DFF8F5] text-black text-sm font-medium"
      >
        <img src={LanguageIcon} alt="언어 아이콘" className="w-4 h-4" />
        {selectedLang}
      </button>

      {/* 드롭다운 영역 */}
      {isOpen && (
        <div className="absolute left-0 mt-2 z-10 bg-white border border-[#C8C8C8] rounded-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 flex flex-col items-center gap-4 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`
                flex items-center gap-2 px-6 py-2 text-sm w-full justify-start
                ${selectedLang === lang ? 'bg-[#DFF8F5]' : 'bg-[#EFEFEF]'}
                rounded-[10px] hover:bg-[#DFF8F5] transition
              `}
            >
              <img src={LanguageIcon} alt="언어 아이콘" className="w-4 h-4" />
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
