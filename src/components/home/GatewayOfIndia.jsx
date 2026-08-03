const GatewayOfIndia = () => {
  return (
 <section className="relative overflow-hidden">

  {/* Background Image */}

  <picture>
    <source
      media="(max-width:1023px)"
      srcSet="/gatewayOfIndia.webp"
    />

    <img
      src="/gatewayOfIndia.webp"
      alt="Gateway Of India"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </picture>

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#f9e4bf]/90 via-[#f9e4bf]/45 to-transparent" />

  {/* Content */}

  <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

    <div className="max-w-xl">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#F4C02D]">
        Inspired By Heritage
      </p>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#164984] sm:text-5xl lg:text-6xl">
        Crafted with
        <span className="block text-[#603917]">
          Indian Heritage
        </span>
      </h2>

      <p className="mt-6 text-base leading-8 text-[#3e5a2c] lg:text-lg">
        Every bite reflects India's
        <br className="block lg:hidden" />
        timeless culture.

        <br className="block lg:hidden" />

        Inspired by
        <br className="block lg:hidden" />
        the majestic Gateway of India.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div>
          <h4 className="text-2xl font-bold text-[#603917]">
            100%
          </h4>

          <p className="mt-1 text-sm text-[#3e5a2c]">
            Natural Ingredients
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-[#603917]">
            Premium
          </h4>

          <p className="mt-1 text-sm text-[#3e5a2c]">
            Heritage Recipes
          </p>
        </div>
      </div>

    </div>

  </div>

</section>
  );
};

export default GatewayOfIndia;