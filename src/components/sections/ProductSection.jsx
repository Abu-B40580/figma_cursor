import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {product.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-light/90 px-2 py-[2px] text-[10px] font-semibold text-accent-brown"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 py-3 text-sm">
        <p className="truncate text-xs text-neutral-500">{product.subtitle}</p>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-accent-brown">
          {product.name}
        </h3>
        <p className="mt-1 text-[11px] text-neutral-500">{product.spec}</p>
        <div className="mt-2 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] text-neutral-500">NT.</span>
            <span className="text-lg font-extrabold text-primary">
              {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-neutral-400 line-through">
                NT. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <IconButton
            size="small"
            sx={{
              borderRadius: '9999px',
              backgroundColor: '#fff7e0',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
              '&:hover': {
                backgroundColor: '#ffe7b8',
              },
            }}
            onClick={() => {
              // placeholder 行為
              // eslint-disable-next-line no-console
              console.log('add to cart', product.id);
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 18, color: '#c27c1c' }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

function ProductSection({ id, title, products, withCTA = false }) {
  return (
    <section id={id}>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-accent-brown md:text-xl">
            {title}
          </h2>
          <p className="mt-1 text-xs text-neutral-500 md:text-sm">
            嚴選季節好物，天天新鮮上桌。
          </p>
        </div>
        <button
          type="button"
          className="hidden text-xs text-neutral-500 underline-offset-4 hover:text-accent-brown hover:underline md:inline-block"
        >
          看更多商品
        </button>
      </div>

      <div className="relative mt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 左右箭頭（目前僅樣式） */}
        <div className="pointer-events-none absolute inset-y-0 flex items-center justify-between">
          <IconButton
            size="small"
            className="pointer-events-auto -translate-x-4 bg-white shadow-card md:-translate-x-6"
            sx={{ borderRadius: '9999px' }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton
            size="small"
            className="pointer-events-auto translate-x-4 bg-white shadow-card md:translate-x-6"
            sx={{ borderRadius: '9999px' }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </div>
      </div>

      {withCTA && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-primary px-6 py-2 text-xs font-semibold text-white shadow-card transition hover:bg-primary-dark md:text-sm"
          >
            查看更多禮盒商品
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductSection;

