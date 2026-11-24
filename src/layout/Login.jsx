import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import {
  Phone,
  ShieldCheck,
  ArrowLeft,
  Loader2,
  RotateCw,
  Package,
} from "lucide-react";
import useLogin from "../hooks/auth/useLogin";
import { authStorage } from "../utils/authStorage";

const OTP_LENGTH = 6;
const RESEND_COOLDOWN_SECONDS = 30;

const sanitizeIndianPhone = (value) => {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) {
    digits = digits.slice(-10);
  } else if (digits.length > 10 && digits.startsWith("0")) {
    digits = digits.slice(-10);
  }
  return digits.slice(0, 10);
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    sendOtp,
    verifyOtp,
    resendOtp,
    loading,
    resending,
    error,
    setError,
  } = useLogin();

  const [step, setStep] = useState("PHONE"); // "PHONE" | "OTP"
  const [phone, setPhone] = useState("");
  const [otpDigits, setOtpDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [resendTimer, setResendTimer] = useState(0);

  const otpInputRefs = useRef([]);

  // Resolve intended post-login redirect path (supports both Location object and string)
  const fromState = location.state?.from;
  const intendedPath =
    typeof fromState === "string"
      ? fromState
      : fromState?.pathname
        ? `${fromState.pathname}${fromState.search || ""}`
        : "/my-orders";

  const isFromOrderFlow =
    intendedPath.startsWith("/my-orders") ||
    intendedPath.startsWith("/orders/");

  // If already logged in, send straight to intended page / orders
  useEffect(() => {
    if (authStorage.isAuthenticated()) {
      navigate(intendedPath, { replace: true });
    }
  }, [intendedPath, navigate]);

  // Resend countdown timer
  useEffect(() => {
    if (resendTimer <= 0) return undefined;
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  // Auto-focus first OTP box when switching to OTP step
  useEffect(() => {
    if (step === "OTP") {
      const timeout = setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 60);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [step]);

  const isValidPhone = /^[6-9]\d{9}$/.test(phone);
  const otpValue = otpDigits.join("");
  const isOtpComplete = otpValue.length === OTP_LENGTH;

  const handlePhoneChange = (e) => {
    const cleaned = sanitizeIndianPhone(e.target.value);
    setPhone(cleaned);
    if (error) setError("");
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!isValidPhone) {
      const msg = "Please enter a valid 10-digit mobile number.";
      setError(msg);
      toast.error(msg);
      return;
    }

    const result = await sendOtp(phone);
    if (result.success) {
      toast.success(result.message || "OTP sent to your mobile number!");
      setOtpDigits(Array(OTP_LENGTH).fill(""));
      setStep("OTP");
      setResendTimer(RESEND_COOLDOWN_SECONDS);
    } else {
      toast.error(result.error || "Unable to send OTP. Please try again.");
    }
  };

  const handleOtpChange = (index, rawVal) => {
    const digits = String(rawVal || "").replace(/\D/g, "");
    if (error) setError("");

    // Handle paste or SMS autofill of multiple digits inside a single box
    if (digits.length > 1) {
      const next = [...otpDigits];
      const sliced = digits.slice(0, OTP_LENGTH).split("");
      for (let i = 0; i < OTP_LENGTH; i++) {
        next[i] = sliced[i] || "";
      }
      setOtpDigits(next);
      const focusIdx = Math.min(sliced.length, OTP_LENGTH - 1);
      otpInputRefs.current[focusIdx]?.focus();
      return;
    }

    const next = [...otpDigits];
    next[index] = digits;
    setOtpDigits(next);

    if (digits && index < OTP_LENGTH - 1) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otpDigits[index]) {
        const next = [...otpDigits];
        next[index] = "";
        setOtpDigits(next);
      } else if (index > 0) {
        otpInputRefs.current[index - 1]?.focus();
        const next = [...otpDigits];
        next[index - 1] = "";
        setOtpDigits(next);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;

    const next = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((char, idx) => {
      next[idx] = char;
    });
    setOtpDigits(next);
    if (error) setError("");

    const focusIdx = Math.min(pasted.length, OTP_LENGTH - 1);
    otpInputRefs.current[focusIdx]?.focus();
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!isOtpComplete) {
      const msg = `Please enter the ${OTP_LENGTH}-digit OTP sent to your mobile.`;
      setError(msg);
      toast.error(msg);
      return;
    }

    const result = await verifyOtp({
      phone,
      otp: otpValue,
    });

    if (result.success) {
      const displayName =
        result.user?.name && result.user.name !== "Customer"
          ? ` ${result.user.name}`
          : "";

      if (result.linkedGuestOrders > 0) {
        toast.success(
          `Welcome${displayName}! ${result.linkedGuestOrders} ${
            result.linkedGuestOrders === 1 ? "order" : "orders"
          } linked to your account.`
        );
      } else {
        toast.success(`Welcome${displayName}! Login successful.`);
      }

      navigate(intendedPath, {
        replace: true,
        state: fromState?.state || undefined,
      });
    } else {
      toast.error(result.error || "Invalid or expired OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0 || resending) return;

    const result = await resendOtp(phone, "text");
    if (result.success) {
      toast.success(result.message || "OTP resent to your mobile number!");
      setOtpDigits(Array(OTP_LENGTH).fill(""));
      setResendTimer(RESEND_COOLDOWN_SECONDS);
      otpInputRefs.current[0]?.focus();
    } else {
      toast.error(result.error || "Unable to resend OTP. Please try again.");
    }
  };

  const handleChangeNumber = () => {
    setStep("PHONE");
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setError("");
    setResendTimer(0);
  };

  return (
    <div className="min-h-[82vh] bg-[#f5ebda] flex md:items-center justify-center px-4 py-8 md:py-12">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-7">
          <h1 className="text-4xl font-cormorant font-bold text-[#572340]">
            WeMake Sweets & Snacks
          </h1>

          <p className="mt-2 text-sm text-gray-600 font-manrope">
            {isFromOrderFlow
              ? "Login with your mobile number to view & track your orders."
              : "Quick & secure OTP login — no password required."}
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl px-6 py-8 sm:px-8 border border-[#603917]/10">
          {step === "PHONE" ? (
            <>
              {/* Heading */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#572340]/10 px-3 py-1 text-[11px] font-semibold text-[#572340] mb-3 font-manrope">
                  <ShieldCheck size={14} />
                  Mobile OTP Login
                </div>

                <h2 className="text-2xl font-bold text-gray-800 font-manrope">
                  {isFromOrderFlow ? "Track Your Orders" : "Login with Mobile"}
                </h2>

                <p className="mt-1 text-sm text-gray-500 font-manrope">
                  Enter your 10-digit mobile number to receive a 6-digit OTP via SMS.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm text-red-600 font-manrope">{error}</p>
                </div>
              )}

              <form onSubmit={handleSendOtp} className="space-y-5">
                {/* Mobile Number Input */}
                <div>
                  <label
                    htmlFor="mobile-number"
                    className="mb-2 block text-sm font-medium text-gray-700 font-manrope"
                  >
                    Mobile Number
                  </label>

                  <div className="flex items-center rounded-lg border border-gray-300 bg-white overflow-hidden transition focus-within:border-[#572340] focus-within:ring-1 focus-within:ring-[#572340]">
                    <div className="flex items-center gap-1.5 border-r border-gray-200 bg-[#fbf8f2] px-3.5 py-3 text-sm font-semibold text-[#572340] select-none">
                      <Phone size={15} className="text-[#8b183d]" />
                      <span>+91</span>
                    </div>

                    <input
                      id="mobile-number"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      autoFocus
                      className="w-full px-3.5 py-3 text-sm tracking-wider text-gray-800 outline-none font-manrope"
                    />
                  </div>

                  {phone.length > 0 && !isValidPhone && (
                    <p className="mt-1.5 text-xs text-amber-600 font-manrope">
                      Enter a valid 10-digit Indian mobile number ({phone.length}/10)
                    </p>
                  )}
                  {isValidPhone && (
                    <p className="mt-1.5 text-xs text-emerald-600 font-medium font-manrope">
                      Valid mobile number — ready to send OTP
                    </p>
                  )}
                </div>

                {/* Send OTP Button */}
                <button
                  type="submit"
                  disabled={loading || !isValidPhone}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold text-white bg-pink-600 hover:bg-[#60b396] hover:scale-[1.02] shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 cursor-pointer font-manrope"
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </form>

              {/* Guest Order Auto-Link Info Box */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#603917]/15 bg-[#fbf8f2] p-3.5">
                <Package
                  size={18}
                  className="mt-0.5 shrink-0 text-[#8b183d]"
                />
                <p className="text-xs leading-5 text-[#603917]/80 font-manrope">
                  <strong className="text-[#572340]">Ordered as a guest?</strong>{" "}
                  No separate signup needed — simply login with the same mobile
                  number and all your past orders will appear automatically.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Back / Change Number */}
              <button
                type="button"
                onClick={handleChangeNumber}
                className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#603917]/70 hover:text-[#572340] transition cursor-pointer font-manrope"
              >
                <ArrowLeft size={14} />
                Change Mobile Number
              </button>

              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 font-manrope">
                  Verify OTP
                </h2>

                <p className="mt-1 text-sm text-gray-500 font-manrope">
                  Enter the {OTP_LENGTH}-digit code sent via SMS to{" "}
                  <span className="font-semibold text-[#572340]">
                    +91 {phone}
                  </span>
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm text-red-600 font-manrope">{error}</p>
                </div>
              )}

              <form onSubmit={handleVerifyOtp} className="space-y-6">
                {/* 6-Digit OTP Input Boxes */}
                <div>
                  <label className="mb-2.5 block text-sm font-medium text-gray-700 font-manrope">
                    Enter 6-Digit OTP
                  </label>

                  <div
                    className="grid grid-cols-6 gap-2 sm:gap-2.5"
                    onPaste={handleOtpPaste}
                  >
                    {otpDigits.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          otpInputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        autoComplete={index === 0 ? "one-time-code" : "off"}
                        maxLength={OTP_LENGTH}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        aria-label={`OTP digit ${index + 1}`}
                        className="h-12 sm:h-13 w-full rounded-xl border border-gray-300 bg-[#fdfcf9] text-center text-lg font-bold text-[#572340] outline-none transition focus:border-[#572340] focus:bg-white focus:ring-2 focus:ring-[#572340]/20 font-manrope"
                      />
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={loading || !isOtpComplete}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold text-white bg-pink-600 hover:bg-[#60b396] hover:scale-[1.02] shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 cursor-pointer font-manrope"
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Verifying OTP...
                    </>
                  ) : (
                    "Verify & Login"
                  )}
                </button>

                {/* Resend OTP Row */}
                <div className="flex items-center justify-between pt-1 text-xs font-manrope">
                  <span className="text-gray-500">Didn't receive the OTP?</span>

                  {resendTimer > 0 ? (
                    <span className="font-semibold text-[#603917]/60">
                      Resend in {resendTimer}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={resending}
                      className="inline-flex items-center gap-1 font-semibold text-[#572340] hover:text-pink-600 hover:underline disabled:opacity-50 cursor-pointer"
                    >
                      <RotateCw
                        size={13}
                        className={resending ? "animate-spin" : ""}
                      />
                      {resending ? "Resending..." : "Resend OTP"}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500 font-manrope">
          © {new Date().getFullYear()} WeMake Sweets
        </p>
      </div>
    </div>
  );
};

export default Login;
