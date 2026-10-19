import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Sparkles } from "lucide-react";
import promoPopupService from "../../services/promoPopupService";

const PromoPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchPopupImage = async () => {
      try {
        const result = await promoPopupService.getPromoImage();

        if (isMounted && result.success && result.imageUrl) {
          // Preload the image before showing the modal to avoid layout flash
          const img = new Image();
          img.src = result.imageUrl;
          img.onload = () => {
            if (isMounted) {
              setImageUrl(result.imageUrl);
              setImageLoaded(true);
              setIsOpen(true);
            }
          };
          img.onerror = () => {
            console.warn("Failed to load promo image asset:", result.imageUrl);
          };
        }
      } catch (err) {
        console.error("Error loading promo popup image:", err);
      }
    };

    // Small delay so initial page layout mounts smoothly
    const timer = setTimeout(() => {
      fetchPopupImage();
    }, 400);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Handle ESC key press and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
  };

  const handleImageClick = () => {
    // When user clicks the discount image, redirect to products page to shop
    setIsOpen(false);
    navigate("/products");
  };

  if (!isOpen || !imageUrl || !imageLoaded) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Special Offer"
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      {/* Backdrop with semi-transparent blur so the site remains visible underneath */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-[3px] transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-[92vw] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[520px] transition-all transform animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button (Cross Sign) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close special offer"
          className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#572340] text-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] border-2 border-white hover:bg-black hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <X className="h-5 w-5 sm:h-5 sm:w-5 stroke-[2.5]" />
        </button>

        {/* Promo Image Container */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-white/20">
          <div
            onClick={handleImageClick}
            className="cursor-pointer block relative overflow-hidden"
            title="Click to view discounted products"
          >
            <img
              src={imageUrl}
              alt="Special Discount Offer"
              className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] object-contain sm:object-cover mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Subtle bottom action hint */}
            <div className="bg-gradient-to-r from-[#572340] via-pink-700 to-[#572340] px-4 py-2.5 sm:py-3 flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors group-hover:brightness-110">
              <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
              <span>Click here to explore special offers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopupModal;
