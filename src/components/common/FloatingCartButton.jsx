import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function FloatingCartButton({ count = 2, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick || (() => console.log('open cart'))}
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#d9b545] text-white shadow-card transition-colors hover:bg-[#f4dd80] md:bottom-10 md:right-10 md:h-16 md:w-16"
    >
      <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
      {count > 0 && (
        <div className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#54b45a] text-[10px] font-semibold text-white shadow-[0_0_0_2px_rgba(0,0,0,0.05)]">
          {count}
        </div>
      )}
    </button>
  );
}

export default FloatingCartButton;

