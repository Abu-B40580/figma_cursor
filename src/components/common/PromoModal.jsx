import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const closed = window.sessionStorage.getItem('farmPromoClosed');
      if (!closed) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem('farmPromoClosed', '1');
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/55 backdrop-blur-[2px]">
      {/* Close button top-right */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-6 top-6 flex items-center gap-1 text-xs text-white/80 hover:text-white"
      >
        <CloseIcon sx={{ fontSize: 14 }} />
        <span>Close</span>
      </button>

      {/* Promo card */}
      <div className="relative mx-4 max-w-sm">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[url('https://images.pexels.com/photos/5945746/pexels-photo-5945746.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center shadow-card">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60" />

          <div className="relative flex min-h-[360px] flex-col items-center px-8 py-10 text-center text-white">
            <p className="text-[11px] tracking-[0.35em] text-amber-200">
              限時優惠 · 數量加倍
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-relaxed drop-shadow-md">
              支持偏鄉小農，傳遞愛與新鮮
            </h2>
            <p className="mt-3 text-lg font-extrabold leading-snug drop-shadow-md">
              購買指定產品
              <br />
              享限時 9 折優惠
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-amber-100/90">
              邀請你將新鮮和溫暖帶回家，和家人鄰居一起分享農民的
              <br />
              美味又有故事的餐桌日常！
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-primary-dark"
            >
              前往選購
            </button>

            {/* pagination dots */}
            <div className="mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-2 w-5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoModal;

