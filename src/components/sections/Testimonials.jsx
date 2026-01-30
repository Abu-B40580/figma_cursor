function Testimonials() {
  const testimonials = [
    {
      name: '林媽媽',
      role: '家庭主婦',
      content: '透過這個平台，每週固定收到新鮮蔬果，小孩也更願意吃青菜了！',
    },
    {
      name: '埤頭果園青農',
      role: '合作小農',
      content: '能直接把自己種的好東西送到消費者手上，是很有成就感的一件事。',
    },
    {
      name: 'Mike',
      role: '上班族',
      content: '以前很少煮飯，自從訂了小農箱，每週都期待打開箱子的驚喜。',
    },
    {
      name: 'Sandy',
      role: '料理部落客',
      content: '食材品質穩定，拍照起來也很好看，很適合做料理分享。',
    },
  ];

  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-content px-4 py-14 md:py-16">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-accent-brown md:text-2xl">
            客人好評
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            農農自然陪伴你與家人，享受安心又美味的餐桌時光。
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl bg-white px-4 py-5 shadow-card"
            >
              <div>
                <div className="inline-flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-accent-brown">
                    {t.name[0]}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-accent-brown">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-neutral-500">
                      {t.role}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-neutral-700">
                  {t.content}
                </p>
              </div>
              <div className="mt-3 text-xs text-amber-400">★★★★★</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

