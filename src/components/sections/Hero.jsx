import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchFilterPanel from '../search/SearchFilterPanel.jsx';

const heroSlides = [
  {
    id: 1,
    image:
      "url('https://images.pexels.com/photos/5945746/pexels-photo-5945746.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  },
  {
    id: 2,
    image:
      "url('https://images.pexels.com/photos/5945792/pexels-photo-5945792.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  },
  {
    id: 3,
    image:
      "url('https://images.pexels.com/photos/5945769/pexels-photo-5945769.jpeg?auto=compress&cs=tinysrgb&w=1600')",
  },
];

const hotTags = ['特價優惠', '禮盒', '草莓季', '產季消費', '冷凍宅配'];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleTagClick = (tag) => {
    setKeyword(tag);
    setIsSearchActive(true);
  };

  const handleSearchFocus = () => {
    setIsSearchActive(true);
  };

  const handleSearchBlur = () => {
    // 不在 blur 直接關閉，交給 panel 自己處理外部點擊
  };

  const handleSearch = () => {
    // eslint-disable-next-line no-console
    console.log('search', { keyword });
  };

  const backgroundImage = heroSlides[current].image;

  return (
    <section
      className="relative min-h-[480px] bg-cover bg-center md:min-h-[560px]"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60" />

      <div className="relative mx-auto flex max-w-content flex-col items-center px-4 pb-16 pt-28 text-center text-white md:pb-24 md:pt-32">
        {/* 上方橘色 pill */}
        <div className="rounded-full bg-[#d3681b] px-4 py-1 text-xs font-semibold tracking-[0.35em] text-white/95 md:text-sm">
          限時優惠 ● 愛心加倍
        </div>

        {/* 大標 & 副標 */}
        <h1 className="mt-6 text-3xl font-extrabold leading-snug tracking-wide text-white drop-shadow-md md:text-5xl">
          支持偏鄉小農，傳遞愛與新鮮
        </h1>
        <p className="mt-4 text-lg font-semibold text-white drop-shadow-md md:text-2xl">
          購買指定產品，享限時{' '}
          <span className="text-4xl text-[#ffdf72] md:text-5xl">9</span> 折優惠
        </p>

        {/* 搜尋列 + tags */}
        <div className="mt-10 w-full max-w-3xl">
          <div className="rounded-[999px] bg-white p-3 shadow-card">
            <div className="flex items-center rounded-full bg-white px-4 py-2">
              <TextField
                variant="standard"
                placeholder="輸入想搜尋的商品、關鍵字..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  flex: 1,
                  '& .MuiInputBase-input': {
                    fontSize: '0.9rem',
                    paddingY: 0.5,
                  },
                }}
              />
              <IconButton
                onClick={handleSearch}
                sx={{
                  ml: 1,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <SearchIcon fontSize="small" />
              </IconButton>
            </div>

            {isSearchActive && (
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {hotTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleTagClick(tag)}
                    className="rounded-full bg-[#f9e4c3] px-3 py-1 text-[11px] font-semibold text-[#8a5a24] hover:bg-[#f2ce93]"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 輪播指示點 */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? 'w-6 bg-white' : 'w-2 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 搜尋篩選面板 */}
      <SearchFilterPanel active={isSearchActive} onActiveChange={setIsSearchActive} />

      {/* 波浪分隔 */}
      <div className="pointer-events-none -mb-px h-10 w-full bg-background [clip-path:polygon(0_100%,100%_100%,100%_40%,75%_70%,50%_40%,25%_70%,0_40%)]" />
    </section>
  );
}

export default Hero;

