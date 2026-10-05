import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section className="min-h-[60vh] bg-[#f5ebda] px-4 py-16 flex items-center justify-center">
          <div className="w-full max-w-lg rounded-3xl border border-[#60391720] bg-[#f2ede1] p-8 text-center shadow-lg">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b183d] font-manrope">
              Something went wrong
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2d2d2d] font-cormorant">
              We couldn't load this content
            </h2>
            <p className="mt-3 text-sm text-gray-500 font-manrope leading-relaxed">
              An unexpected error occurred. Please try reloading the page or returning home.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="rounded-xl bg-pink-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[2px_3px_0px_#000] hover:bg-[#60b396] transition-all font-manrope cursor-pointer"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="rounded-xl border border-[#60391740] bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#603917] hover:bg-gray-50 transition-all font-manrope"
              >
                Go to Home
              </a>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
