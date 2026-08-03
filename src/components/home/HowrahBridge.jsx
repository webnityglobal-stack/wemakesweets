const HowrahBridge = () => {
  return (
   <section className="relative overflow-hidden">
  {/* Background Image */}
  <picture>
    <source
      media="(max-width:1023px)"
      srcSet="/howrahBridgeBackground.webp"
    />

    <img
      src="/howrahBridgeBackground.webp"
      alt="Howrah Bridge"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </picture>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#f9e4bf]/90 via-[#f9e4bf]/45 to-transparent" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
    <div className="max-w-[240px] sm:max-w-lg">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#F4C02D]">
        Inspired By Heritage
      </p>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#164984] sm:text-5xl lg:text-6xl">
        Crafted with
        <span className="block text-[#603917]">
          Timeless Heritage
        </span>
      </h2>

      <p className="mt-6 text-base leading-8 text-[#3e5a2c] lg:text-lg">
        Every bite reflects India's
        <br className="block lg:hidden" />
        timeless culture.

        <br className="block lg:hidden" />

        Inspired by
        <br className="block lg:hidden" />
        the iconic Howrah Bridge.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h4 className="text-3xl font-bold text-[#603917]">
            Premium
          </h4>

          <p className="mt-2 text-sm text-[#3e5a2c]">
            Finest Dry Fruits
          </p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-[#603917]">
            Handcrafted
          </h4>

          <p className="mt-2 text-sm text-[#3e5a2c]">
            Traditional Recipes
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default HowrahBridge;