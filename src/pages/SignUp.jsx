import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../hooks/auth/useSignUp";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };


  const {
    signup,
    loading,
    error,
    setError,
  } = useSignUp();


const handleSubmit = async (e) => {
  e.preventDefault();

  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
  } = formData;

  if (
    !name ||
    !email ||
    !phone ||
    !password ||
    !confirmPassword
  ) {
    setError("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    return;
  }

  const signupData = {
    name,
    email,
    phone,
    password,
  };

  const result = await signup(signupData);

  if (result.success) {
    navigate("/login");
  }
};

  
  return (
    <div className="bg-[#f5ebda] flex md:items-center justify-center px-5 pt-4 md:px-4 md:py-8">

      <div className="w-full max-w-md ">

        {/* Logo / Brand */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-4xl font-cormorant text-[#572340]">
            We Make Sweets
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Create your account and discover something sweet.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl px-6 py-8 sm:px-6">

          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Sign up to continue shopping with us.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
              />
            </div>


{/* Phone Number */}
<div>
  <label
    htmlFor="phone"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Phone Number
  </label>

  <input
    id="phone"
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your Phone Number"
    inputMode="numeric"
    maxLength={10}
    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
  />
</div>

          <div className="flex gap-4">
              {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-15 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#572340]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full rounded-lg border border-gray-300 px-2 py-3 pr-16 text-sm outline-none transition focus:border-[#572340] focus:ring-1 focus:ring-[#572340]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#572340]"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-[#572340]"
              />

              <p className="text-xs leading-5 text-gray-500">
                I agree to the terms and conditions and
                privacy policy.
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg py-3.5 text-sm font-semibold text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
                {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          {/* Login */}
          <div className="mt-7 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#572340] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </div>

        {/* Bottom */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} We Make Sweets
        </p>

      </div>
    </div>
  );
};

export default Signup;