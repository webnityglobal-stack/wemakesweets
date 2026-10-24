import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Mail, Phone, Eye, EyeOff } from "lucide-react";
import axiosInstance from "../api/axiosInstance";
import { authStorage } from "../utils/authStorage";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const cleanInput = formData.identifier.trim();
  const isEmailInput = cleanInput.includes("@");
  const isPhoneInput =
    !isEmailInput && /^[0-9+\s-]{7,15}$/.test(cleanInput);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password } = formData;

    if (!cleanInput || !password) {
      const msg = "Please enter your email or mobile number, and password.";
      setError(msg);
      toast.error(msg);
      return;
    }

    const isEmail = cleanInput.includes("@");
    const digitsOnly = cleanInput.replace(/\D/g, "");

    // Validation
    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanInput)) {
        const msg = "Please enter a valid email address.";
        setError(msg);
        toast.error(msg);
        return;
      }
    } else {
      if (digitsOnly.length < 10) {
        const msg = "Please enter a valid 10-digit mobile number or email.";
        setError(msg);
        toast.error(msg);
        return;
      }
    }

    const phone10 =
      digitsOnly.length >= 10 ? digitsOnly.slice(-10) : cleanInput;

    // Send both specific field and generic identifier for maximum backend compatibility
    const payload = {
      password,
      identifier: cleanInput,
      ...(isEmail
        ? { email: cleanInput.toLowerCase() }
        : { phone: phone10 }),
    };

    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.post("/auth/login", payload);

      const { token, user } = response.data;

      // Store authentication data
      authStorage.setAuth({
        token,
        user,
      });

      const userName = user?.name ? ` ${user.name}` : "";
      toast.success(`Welcome back${userName}! Login successful.`);

      // Redirect to intended page or cart
      const redirectPath = location.state?.from?.pathname || "/cart";
      navigate(redirectPath);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Invalid email/phone or password. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f5ebda] flex md:items-center justify-center px-4 pt-4 md:px-4 md:pt-6">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cormorant font-bold text-[#572340]">
            WeMake Sweets & Snacks
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Welcome back<b className="pl-[1px] pr-[2px]">!</b> Login to continue.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl px-6 py-8 sm:px-8">
          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome Back
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter your email or mobile number to access your account.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email or Phone Number */}
            <div>
              <label
                htmlFor="identifier"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email or Mobile Number
              </label>

              <div className="relative">
                <input
                  id="identifier"
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="Enter email or 10-digit mobile number"
                  autoComplete="username"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
                />

                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  {isPhoneInput ? (
                    <Phone size={18} className="text-emerald-600 transition-colors" />
                  ) : isEmailInput ? (
                    <Mail size={18} className="text-[#572340] transition-colors" />
                  ) : (
                    <Mail size={18} className="text-gray-400" />
                  )}
                </div>
              </div>

              {/* Dynamic feedback indicator */}
              {isPhoneInput && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-emerald-600 font-medium">
                  <Phone size={12} /> Logging in with Mobile Number
                </p>
              )}
              {isEmailInput && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#572340] font-medium">
                  <Mail size={12} /> Logging in with Email
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-[#572340] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#572340] transition cursor-pointer p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg py-3.5 text-sm font-semibold text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Signup */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-semibold text-[#572340] hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} WeMake Sweets
        </p>
      </div>
    </div>
  );
};

export default Login;