function Farmers() {
  const farmers = [
    { name: 'Pipi', region: '台北小農', socials: ['FB', 'IG', 'Web'] },
    { name: 'Abu', region: '台中友善農夫', socials: ['FB', 'IG', 'Web'] },
    { name: 'Sandy', region: '南投水果職人', socials: ['FB', 'IG', 'Web'] },
    { name: 'Edward', region: '花東有機農', socials: ['FB', 'IG', 'Web'] },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold text-accent-brown md:text-2xl">
            關於我們
          </h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            農農自然與台灣各地的小農夥伴合作，把土地上的心意用最簡單的方式傳遞給你。
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          {farmers.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs shadow-card md:px-5 md:py-2.5 md:text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-[11px] font-semibold text-accent-brown">
                  農
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-accent-brown">
                    {f.name}
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    {f.region}
                  </span>
                </div>
              </div>
              <div className="ml-2 flex gap-1 text-[10px] text-neutral-400 md:text-xs">
                {f.socials.map((s) => (
                  <span
                    key={s}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background-soft text-[10px]"
                  >
                    {s[0]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Farmers;

