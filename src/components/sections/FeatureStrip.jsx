function FeatureStrip() {
  const features = [
    {
      title: '安心',
      desc: '產地直送、透明履歷，吃得更放心。',
      color: 'bg-accent-green',
    },
    {
      title: '營養',
      desc: '當季蔬果熟成採收，保留土地原味。',
      color: 'bg-primary',
    },
    {
      title: '方便',
      desc: '線上下單宅配到府，免跑市場排隊。',
      color: 'bg-accent-brown',
    },
    {
      title: '心得',
      desc: '小農精選分享，教你這樣吃最好吃。',
      color: 'bg-white text-accent-brown',
    },
  ];

  return (
    <section className="relative mt-16 bg-accent-brown">
      {/* 左側模糊農產品背景圖 */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 bg-cover bg-center opacity-30 blur-[2px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1646925707484-5d6b547bba20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="relative mx-auto max-w-content px-4 py-14 md:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold text-white md:text-2xl">
            享受餐桌上的幸福時光
          </h2>
          <p className="mt-2 text-sm text-white/90 md:text-base">
            一日三餐，守護全家人的健康
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex justify-center">
              <div
                className={`flex h-32 w-32 flex-col items-center justify-center rounded-full text-center text-sm font-medium text-white shadow-card ${f.color}`}
              >
                <div className="text-lg font-semibold">{f.title}</div>
                <div className="mt-2 px-4 text-[11px] leading-relaxed opacity-90">
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureStrip;

