import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!openMenu) return undefined;

    const handleClick = (event) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openMenu]);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30">
      <div className="pointer-events-auto mx-auto mt-4 flex max-w-content items-center justify-between rounded-full bg-white/80 px-6 py-3 shadow-card backdrop-blur md:mt-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-card md:h-12 md:w-12">
            農
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-accent-brown md:text-base">
              農農自然
            </span>
            <span className="text-[11px] text-neutral-500 md:text-xs">
              在地小農選物平台
            </span>
          </div>
        </div>

        {/* Nav & actions */}
        <div className="relative flex items-center gap-3 md:gap-4" ref={menuRef}>
          <div className="hidden text-xs text-neutral-600 md:block">
            <span className="font-semibold text-accent-brown">皮皮 先生/小姐，您好</span>
          </div>

          {/* Member avatar */}
          <button
            type="button"
            onClick={() => setOpenMenu((prev) => !prev)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-[0] transition-colors md:h-10 md:w-10 ${
              openMenu
                ? 'border-[#9c6c1b] bg-[#9c6c1b] text-white'
                : 'border-[#9c6c1b] bg-white text-[#9c6c1b] hover:bg-[#9c6c1b]/10'
            }`}
          >
            <PersonOutlineOutlinedIcon fontSize="small" />
          </button>

          <IconButton
            size="small"
            sx={{
              borderRadius: '9999px',
              border: '2px solid #a56d0f',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#a56d0f',
              },
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{
                color: '#a56d0f',
                transition: 'color 150ms ease',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            />
          </IconButton>

          {/* Member dropdown */}
          {openMenu && (
            <div className="absolute right-0 top-[120%] w-56 rounded-[1.75rem] bg-[#fff9ea] p-4 text-xs text-neutral-700 shadow-card">
              <div className="mb-2 text-[11px] font-semibold text-neutral-500">會員中心</div>
              <ul className="space-y-1.5">
                <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-neutral-100">
                  個人資料
                </li>
                <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-neutral-100">
                  歷史訂單
                </li>
                <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-neutral-100">
                  收藏清單
                </li>
                <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-neutral-100">
                  我的折扣碼
                </li>
                <li className="mt-1 cursor-pointer rounded-lg px-2 py-1 font-semibold text-[#b2502a] hover:bg-[#fff0e6]">
                  登出
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

