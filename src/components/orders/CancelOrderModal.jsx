import React, { useEffect } from "react";
import { AlertTriangle, X, Loader2 } from "lucide-react";

const CancelOrderModal = ({
  isOpen,
  onClose,
  onConfirm,
  orderId,
  loading = false,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && !loading) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, loading, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cancel-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={loading ? undefined : onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#603917]/15 bg-[#fdfcf9] p-6 shadow-2xl sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded-full p-2 text-[#603917]/50 hover:bg-[#603917]/10 hover:text-[#572340] transition-colors disabled:opacity-50 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Warning Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-inner">
          <AlertTriangle className="h-8 w-8" strokeWidth={2.2} />
        </div>

        {/* Modal Header */}
        <div className="mt-5 text-center">
          <h2
            id="cancel-modal-title"
            className="font-cormorant text-2xl sm:text-3xl font-bold text-[#572340]"
          >
            Cancel Order?
          </h2>

          {orderId && (
            <p className="mt-1 font-mono text-xs font-semibold text-[#8b183d] bg-[#8b183d]/10 inline-block px-3 py-1 rounded-full">
              #{orderId}
            </p>
          )}

          <p className="mt-3 font-manrope text-xs sm:text-sm leading-relaxed text-[#603917]/75">
            Are you sure you want to cancel this order? Once confirmed, this action cannot be undone and your order shipment will be stopped immediately.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#603917]/20 bg-white px-5 py-2.5 font-manrope text-xs font-bold text-[#603917] hover:bg-[#603917]/5 transition-colors disabled:opacity-50 cursor-pointer"
          >
            Keep Order
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-2.5 font-manrope text-xs font-bold text-white shadow-[2px_3px_0px_#000] hover:bg-red-700 hover:shadow-[3px_4px_0px_#000] active:translate-y-0.5 transition-all disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span>Cancelling...</span>
              </>
            ) : (
              <span>Yes, Cancel Order</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;
