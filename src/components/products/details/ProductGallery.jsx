import { useState, useEffect } from "react";

const ProductGallery = ({ images = [] }) => {
  const safeImages = Array.isArray(images) ? images : [];
  const [selectedImage, setSelectedImage] = useState(
    safeImages[0] || "/product1.webp"
  );

  useEffect(() => {
    if (safeImages.length > 0) {
      setSelectedImage(safeImages[0]);
    }
  }, [images]);

  return (
    <div className="space-y-5">
      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border border-[#810c2615] bg-[#f9e4bf]/15 shadow-sm">
        <img
          src={selectedImage}
          alt="Product"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            if (!e.currentTarget.src.includes("/product1.webp")) {
              e.currentTarget.src = "/product1.webp";
            }
          }}
          className="aspect-square w-full  object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}

      <div className="flex gap-3 overflow-x-auto pb-2">
        {safeImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border-2 transition-all

              ${
                selectedImage === image
                  ? "border-[#810c26]"
                  : "border-transparent hover:border-[#810c26]/40"
              }
            `}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                if (!e.currentTarget.src.includes("/product1.webp")) {
                  e.currentTarget.src = "/product1.webp";
                }
              }}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;