function Footer() {
  return (
    <footer className="mt-16 bg-background-footer text-white">
      <div className="mx-auto max-w-content px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                農
              </div>
              <span className="text-lg font-semibold">農農自然</span>
            </div>
            <p className="text-sm text-white/80">
              來自台灣在地友善小農，嚴選安心美味的農產品，把土地的好味道送到你家餐桌。
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="text-base font-semibold">聯絡資訊</h3>
            <p>服務時間｜週一至週五 09:00 - 18:00</p>
            <p>客服專線｜02-1234-5678</p>
            <p>Email｜farm@example.com</p>
            <p>地址｜台北市幸福區小農路 123 號</p>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="text-base font-semibold">快速連結</h3>
            <p>最新上架商品</p>
            <p>熱門商品推薦</p>
            <p>關於我們</p>
            <p>常見問題</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} 農農自然 Local Farm Market. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

